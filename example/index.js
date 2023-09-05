import Keenetic from '../src/index';
import dotenv from 'dotenv';
const { config } = dotenv;
config();

const options = {
  ip: process.env.IP || '',
  port: process.env.PORT || 80,
  login: process.env.LOGIN || 'admin',
  password: process.env.PASSWORD || 'admin',
};

const keenetic = new Keenetic(options);

const data = [{ show: { ip: { hotspot: {} } } }];

(async () => {
  let res = await keenetic.fetch.get('/rci/interface');
  console.log(res);

  res = await keenetic.fetch.post('/rci/', { data });
  console.log(res);
})();
