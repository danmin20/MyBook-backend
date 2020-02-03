"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

require("../../../env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var URL = "https://openapi.naver.com/v1/search/book.json";
var clientID = process.env.ID;
var clientSecret = process.env.SECRET;
var _default = {
  Query: {
    getBooks: function () {
      var _getBooks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref) {
        var term, _ref2, items;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                term = _ref.term;
                _context.next = 3;
                return _axios["default"].get(URL, {
                  params: {
                    query: term,
                    display: 10
                  },
                  headers: {
                    "X-Naver-Client-Id": clientID,
                    "X-Naver-Client-Secret": clientSecret
                  }
                });

              case 3:
                _ref2 = _context.sent;
                items = _ref2.data.items;
                return _context.abrupt("return", items);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getBooks(_x, _x2) {
        return _getBooks.apply(this, arguments);
      }

      return getBooks;
    }()
  }
};
exports["default"] = _default;