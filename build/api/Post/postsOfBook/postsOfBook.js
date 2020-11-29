"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _default = {
  Query: {
    postsOfBook: function () {
      var _postsOfBook = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _prismaClient.prisma.posts({
                  first: args.first,
                  skip: args.offset,
                  where: {
                    book: {
                      isbn: args.isbn
                    }
                  }
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function postsOfBook(_x, _x2) {
        return _postsOfBook.apply(this, arguments);
      }

      return postsOfBook;
    }()
  }
};
exports["default"] = _default;