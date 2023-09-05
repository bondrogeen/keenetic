const crypto = require('crypto');
const http = require('http');
const test = callback => {
  const ip = '192.168.1.1'; // ip router
  const port = 80; // port router

  const login = 'admin'; // login router
  const password = 'password'; // pass router

  let sessionid = '';
  let realm = '';
  let token = '';
  function getHash() {
    const a = `${login}:${realm}:${password}`;
    const b = crypto.createHash('md5').update(a).digest('hex');
    const c = token + b;
    const d = crypto.createHash('sha256').update(c).digest('hex');
    return d;
  }
  function auth() {
    const postData = JSON.stringify({
      login,
      password: getHash()
    }, null, 2);
    console.log(postData);
    const options = {
      host: ip,
      port: port,
      path: '/auth',
      method: 'POST',
      headers: {
        'Content-Length': Buffer.byteLength(postData),
        Cookie: `sysmode=router; ${sessionid}`,
        //sysmode=router; PPUJNTRJITUVJ=NGUORLAWEPBKEUBY
        'Cache-Control': 'no-cache',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    const req = http.request(options, res => {
      res.setEncoding('utf8');
      res.on('data', chunk => {
        console.log(chunk);
      });
      res.on('end', () => {
        api();
      });
    });
    req.write(postData);
    req.end();
  }
  function api() {
    const data = [{
      show: {
        ip: {
          hotspot: {}
        }
      }
    }];
    const postData = JSON.stringify(data, null, 2);
    const options = {
      host: ip,
      port: port,
      path: `/rci/`,
      method: 'POST',
      headers: {
        'Content-Length': Buffer.byteLength(postData),
        Cookie: `sysmode=router; ${sessionid}`,
        'Cache-Control': 'no-cache',
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    const req = http.request(options, res => {
      res.setEncoding('utf8');
      res.on('data', chunk => {
        console.log(chunk);
      });
      res.on('end', () => {});
    });
    req.write(postData);
    req.end();
  }
  http.get(`http://${ip}:${port}/auth`, resp => {
    let body = '';
    resp.on('data', chunk => {});
    resp.on('end', () => {
      token = resp.headers['x-ndm-challenge'];
      realm = resp.headers['x-ndm-realm'];
      sessionid = resp.headers['set-cookie'][0].split(';')[0];
      console.log(token, realm, sessionid);
      auth();
    });
  });
};
export default api;