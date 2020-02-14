"use strict";

var regeneratorRuntime = require("regenerator-runtime");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBooks = void 0;

var _axios = _interopRequireDefault(require("axios"));

require("./env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var URL = "https://openapi.naver.com/v1/search/book.json";
var clientID = process.env.ID;
var clientSecret = process.env.SECRET;

var getBooks =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(term, start) {
    var _ref2, items;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get(URL, {
              params: {
                query: term,
                display: 10,
                start: start
              },
              headers: {
                "X-Naver-Client-Id": clientID,
                "X-Naver-Client-Secret": clientSecret
              }
            });

          case 2:
            _ref2 = _context.sent;
            items = _ref2.data.items;
            return _context.abrupt("return", items);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBooks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBooks = getBooks;