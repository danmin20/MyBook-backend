"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBooks = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require("./env");

var URL = "https://openapi.naver.com/v1/search/book.json";
var clientID = process.env.ID;
var clientSecret = process.env.SECRET;

var getBooks =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(term, start) {
    var _ref2, items;

    return _regenerator["default"].wrap(function _callee$(_context) {
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