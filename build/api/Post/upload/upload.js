"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _getBooks = require("../../../getBooks");

var _default = {
  Mutation: {
    upload: function () {
      var _upload = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, user, title, sentiment, bookId, _yield$getBooks, _yield$getBooks2, book, post;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                user = request.user;
                title = args.title, sentiment = args.sentiment, bookId = args.bookId;
                _context.next = 6;
                return (0, _getBooks.getBooks)(bookId, 1);

              case 6:
                _yield$getBooks = _context.sent;
                _yield$getBooks2 = (0, _slicedToArray2["default"])(_yield$getBooks, 1);
                book = _yield$getBooks2[0];
                _context.next = 11;
                return _prismaClient.prisma.createPost({
                  title: title,
                  sentiment: sentiment,
                  user: {
                    connect: {
                      id: user.id
                    }
                  }
                });

              case 11:
                post = _context.sent;
                _context.next = 14;
                return _prismaClient.prisma.createBook({
                  isbn: book.isbn.replace(/<b>/gi, "").replace(/<\/b>/gi, ""),
                  title: book.title,
                  link: book.link,
                  image: book.image,
                  author: book.author,
                  price: book.price,
                  discount: book.discount,
                  publisher: book.publisher,
                  description: book.description,
                  post: {
                    connect: {
                      id: post.id
                    }
                  }
                });

              case 14:
                return _context.abrupt("return", post);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function upload(_x, _x2, _x3) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }()
  }
};
exports["default"] = _default;