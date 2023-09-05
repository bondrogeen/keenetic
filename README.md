# Keenetic

Package for connecting to a Keenetic router. Tested on version firmware 4.0.4

![image](https://raw.githubusercontent.com/bondrogeen/keenetic/master/images/preview.png)

##

````
import Keenetic from 'keenetic';

const options = {
  ip: '192.168.1.1',
  port: 80,
  login: 'admin',
  password: 'admin',
};

const keenetic = new Keenetic(options);

// keenetic.getHash()
// keenetic.getToken()
// keenetic.auth()

(async () => {
  let res = await keenetic.fetch.get('/rci/interface');
  console.log(res);

  // {
  //   body: {
  //     "GigabitEthernet0": {
  //       "up": true
  //     },
  //     "GigabitEthernet0/0": {
  //       "rename": "1",
  //       "switchport": {
  //         "mode": [
  //           "access"
  //         ],
  //         "access": {
  //           "vid": "1"
  //         }
  //       },
  //       "up": true
  //     },
  //   },
  //   headers: {
  //     server: 'Web server',
  //   },
  //   statusCode: 200
  // }

  res = await keenetic.fetch.post('/rci/', { data });
  console.log(res);

  // {
  //   "body": [
  //     {
  //       "show": {
  //         "ip": {
  //           "hotspot": {
  //             "host": [
  //               {
  //                 "mac": "ff:ff:ff:ff:ff:ff",
  //                 "via": "ff:ff:ff:ff:ff:ff",
  //                 "ip": "192.168.1.100",
  //                 "hostname": "Device",
  //                 "name": "",
  //                 "interface": {
  //                   "id": "Bridge0",
  //                   "name": "Home",
  //                   "description": "Home network"
  //                 },
  //                 "registered": false,
  //                 "access": "permit",
  //                 "schedule": "",
  //                 "priority": 6,
  //                 "active": true,
  //                 "rxbytes": 0,
  //                 "txbytes": 0,
  //                 "first-seen": 1264593,
  //                 "last-seen": 12,
  //                 "link": "up",
  //                 "ssid": "Net_1",
  //                 "ap": "WifiMaster0/AccessPoint0",
  //                 "authenticated": true,
  //                 "txrate": 87,
  //                 "uptime": 10237,
  //                 "ht": 20,
  //                 "mode": "11n",
  //                 "gi": 400,
  //                 "rssi": -53,
  //                 "mcs": 8,
  //                 "txss": 1,
  //                 "ebf": false,
  //                 "_11": [
  //                   "k",
  //                   "r",
  //                   "v"
  //                 ],
  //                 "roam": "ft",
  //                 "security": "wpa2-psk",
  //                 "traffic-shape": {
  //                   "rx": 0,
  //                   "tx": 0,
  //                   "mode": "mac",
  //                   "schedule": ""
  //                 }
  //               },
  //             ]
  //           }
  //         }
  //       }
  //     }
  //   ],
  //   "headers": {},
  //   "statusCode": 200
  // }
})();


```

### 0.0.1 (2023-09-05)

- (bondrogeen) init

## License

The MIT License (MIT)

Copyright (c) 2021-2023, bondrogeen <bondrogeen@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
````
