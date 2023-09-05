"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _http = _interopRequireDefault(require("http"));
var _crypto = _interopRequireDefault(require("crypto"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _ip = /*#__PURE__*/new WeakMap();
var _port = /*#__PURE__*/new WeakMap();
var _login = /*#__PURE__*/new WeakMap();
var _password = /*#__PURE__*/new WeakMap();
var _session = /*#__PURE__*/new WeakMap();
var _realm = /*#__PURE__*/new WeakMap();
var _token = /*#__PURE__*/new WeakMap();
var _fetch = /*#__PURE__*/new WeakMap();
var _getHeaders = /*#__PURE__*/new WeakSet();
var _getOptions = /*#__PURE__*/new WeakSet();
var _patseJSON = /*#__PURE__*/new WeakSet();
var _request = /*#__PURE__*/new WeakSet();
var _refresh = /*#__PURE__*/new WeakSet();
var Keenetic = /*#__PURE__*/function () {
  function Keenetic(_ref) {
    var _this = this;
    var ip = _ref.ip,
      port = _ref.port,
      login = _ref.login,
      password = _ref.password;
    _classCallCheck(this, Keenetic);
    _classPrivateMethodInitSpec(this, _refresh);
    _classPrivateMethodInitSpec(this, _request);
    _classPrivateMethodInitSpec(this, _patseJSON);
    _classPrivateMethodInitSpec(this, _getOptions);
    _classPrivateMethodInitSpec(this, _getHeaders);
    _classPrivateFieldInitSpec(this, _ip, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _port, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _login, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _password, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _session, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _realm, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _token, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _fetch, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _ip, ip);
    _classPrivateFieldSet(this, _port, port);
    _classPrivateFieldSet(this, _login, login);
    _classPrivateFieldSet(this, _password, password);
    _classPrivateFieldSet(this, _login, login);
    _classPrivateFieldSet(this, _fetch, {
      get: function get(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return _classPrivateMethodGet(_this, _request, _request2).call(_this, url, options);
      },
      post: function post(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return _classPrivateMethodGet(_this, _request, _request2).call(_this, url, _objectSpread({
          method: 'POST'
        }, options));
      }
    });
  }
  _createClass(Keenetic, [{
    key: "getHash",
    value: function getHash() {
      var a = "".concat(_classPrivateFieldGet(this, _login), ":").concat(_classPrivateFieldGet(this, _realm), ":").concat(_classPrivateFieldGet(this, _password));
      var b = _crypto["default"].createHash('md5').update(a).digest('hex');
      var c = _classPrivateFieldGet(this, _token) + b;
      var d = _crypto["default"].createHash('sha256').update(c).digest('hex');
      return d;
    }
  }, {
    key: "getToken",
    value: function () {
      var _getToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _classPrivateFieldGet(this, _fetch).get('/auth');
            case 3:
              res = _context.sent;
              _classPrivateFieldSet(this, _token, res.headers['x-ndm-challenge']);
              _classPrivateFieldSet(this, _realm, res.headers['x-ndm-realm']);
              _classPrivateFieldSet(this, _session, res.headers['set-cookie'][0].split(';')[0]);
              return _context.abrupt("return", {
                token: _classPrivateFieldGet(this, _token),
                realm: _classPrivateFieldGet(this, _realm),
                session: _classPrivateFieldGet(this, _session)
              });
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.warn(_context.t0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 10]]);
      }));
      function getToken() {
        return _getToken.apply(this, arguments);
      }
      return getToken;
    }()
  }, {
    key: "auth",
    value: function () {
      var _auth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getToken();
            case 2:
              data = {
                login: _classPrivateFieldGet(this, _login),
                password: this.getHash()
              };
              _context2.next = 5;
              return _classPrivateFieldGet(this, _fetch).post('/auth', {
                data: data
              });
            case 5:
              return _context2.abrupt("return", _context2.sent);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function auth() {
        return _auth.apply(this, arguments);
      }
      return auth;
    }()
  }, {
    key: "fetch",
    get: function get() {
      var _this2 = this;
      return {
        get: function () {
          var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _len,
              arg,
              _key,
              _args3 = arguments;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  for (_len = _args3.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                    arg[_key] = _args3[_key];
                  }
                  _context3.next = 3;
                  return _classPrivateMethodGet(_this2, _refresh, _refresh2).call(_this2, _classPrivateFieldGet(_this2, _fetch).get, arg);
                case 3:
                  return _context3.abrupt("return", _context3.sent);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function get() {
            return _get.apply(this, arguments);
          }
          return get;
        }(),
        post: function () {
          var _post = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _len2,
              arg,
              _key2,
              _args4 = arguments;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  for (_len2 = _args4.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    arg[_key2] = _args4[_key2];
                  }
                  _context4.next = 3;
                  return _classPrivateMethodGet(_this2, _refresh, _refresh2).call(_this2, _classPrivateFieldGet(_this2, _fetch).post, arg);
                case 3:
                  return _context4.abrupt("return", _context4.sent);
                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function post() {
            return _post.apply(this, arguments);
          }
          return post;
        }()
      };
    }
  }]);
  return Keenetic;
}();
function _getHeaders2() {
  return _objectSpread(_objectSpread({}, _classPrivateFieldGet(this, _session) && {
    Cookie: "sysmode=router; ".concat(_classPrivateFieldGet(this, _session))
  }), {}, {
    'Cache-Control': 'no-cache',
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8'
  });
}
function _getOptions2() {
  return {
    hostname: _classPrivateFieldGet(this, _ip),
    port: _classPrivateFieldGet(this, _port)
  };
}
function _patseJSON2(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}
function _request2(url) {
  var _this3 = this;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$method = options.method,
    method = _options$method === void 0 ? 'GET' : _options$method,
    headers = options.headers,
    data = options.data;
  var postData = data ? JSON.stringify(data, null, 2) : '';
  var _options = _objectSpread(_objectSpread({}, _classPrivateMethodGet(this, _getOptions, _getOptions2).call(this)), {}, {
    path: url,
    method: method,
    headers: _objectSpread(_objectSpread(_objectSpread({}, postData && {
      'Content-Length': Buffer.byteLength(postData)
    }), _classPrivateMethodGet(this, _getHeaders, _getHeaders2).call(this)), headers && _objectSpread({}, headers))
  });
  return new Promise(function (resolve, reject) {
    var body = '';
    var req = _http["default"].request(_options, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        var statusCode = res.statusCode,
          headers = res.headers;
        resolve({
          body: _classPrivateMethodGet(_this3, _patseJSON, _patseJSON2).call(_this3, body),
          headers: headers,
          statusCode: statusCode
        });
      });
    });
    req.on('error', function (e) {
      reject(e);
    });
    if (postData) req.write(postData);
    req.end();
  });
}
function _refresh2(_x, _x2) {
  return _refresh3.apply(this, arguments);
}
function _refresh3() {
  _refresh3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(fetch, arg) {
    var res;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return fetch.apply(void 0, _toConsumableArray(arg));
        case 2:
          res = _context5.sent;
          if (!(res.statusCode === 401)) {
            _context5.next = 9;
            break;
          }
          _context5.next = 6;
          return this.auth();
        case 6:
          _context5.next = 8;
          return fetch.apply(void 0, _toConsumableArray(arg));
        case 8:
          res = _context5.sent;
        case 9:
          return _context5.abrupt("return", res);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, this);
  }));
  return _refresh3.apply(this, arguments);
}
var _default = Keenetic;
exports["default"] = _default;