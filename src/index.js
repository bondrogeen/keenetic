import http from 'http';
import crypto from 'crypto';

class Keenetic {
  #ip;
  #port;
  #login;
  #password;
  #session;
  #realm;
  #token;
  #fetch;

  constructor({ ip, port, login, password }) {
    this.#ip = ip;
    this.#port = port;
    this.#login = login;
    this.#password = password;
    this.#login = login;

    this.#fetch = {
      get: (url, options = {}) => this.#request(url, options),
      post: (url, options = {}) => this.#request(url, { method: 'POST', ...options }),
    };
  }

  getHash() {
    const a = `${this.#login}:${this.#realm}:${this.#password}`;
    const b = crypto.createHash('md5').update(a).digest('hex');
    const c = this.#token + b;
    const d = crypto.createHash('sha256').update(c).digest('hex');
    return d;
  }

  #getHeaders() {
    return {
      ...(this.#session && { Cookie: `sysmode=router; ${this.#session}` }),
      'Cache-Control': 'no-cache',
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
    };
  }

  #getOptions() {
    return {
      hostname: this.#ip,
      port: this.#port,
    };
  }

  #patseJSON(data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }

  #request(url, options = {}) {
    const { method = 'GET', headers, data } = options;
    const postData = data ? JSON.stringify(data, null, 2) : '';
    const _options = {
      ...this.#getOptions(),
      path: url,
      method,
      headers: {
        ...(postData && { 'Content-Length': Buffer.byteLength(postData) }),
        ...this.#getHeaders(),
        ...(headers && { ...headers }),
      },
    };
    return new Promise((resolve, reject) => {
      let body = '';
      const req = http.request(_options, res => {
        res.setEncoding('utf8');
        res.on('data', chunk => {
          body += chunk;
        });
        res.on('end', () => {
          const { statusCode, headers } = res;
          resolve({ body: this.#patseJSON(body), headers, statusCode });
        });
      });

      req.on('error', e => {
        reject(e);
      });
      if (postData) req.write(postData);
      req.end();
    });
  }

  async getToken() {
    try {
      const res = await this.#fetch.get('/auth');
      this.#token = res.headers['x-ndm-challenge'];
      this.#realm = res.headers['x-ndm-realm'];
      this.#session = res.headers['set-cookie'][0].split(';')[0];
      return { token: this.#token, realm: this.#realm, session: this.#session };
    } catch (error) {
      console.warn(error);
    }
  }

  async auth() {
    await this.getToken();
    const data = { login: this.#login, password: this.getHash() };
    return await this.#fetch.post('/auth', { data });
  }

  async #refresh(fetch, arg) {
    let res = await fetch(...arg);
    if (res.statusCode === 401) {
      await this.auth();
      res = await fetch(...arg);
    }
    return res;
  }

  get fetch() {
    return {
      get: async (...arg) => await this.#refresh(this.#fetch.get, arg),
      post: async (...arg) => await this.#refresh(this.#fetch.post, arg),
    };
  }
}

export default Keenetic;
