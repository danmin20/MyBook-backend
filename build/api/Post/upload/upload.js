"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _getBooks = _interopRequireDefault(require("../../Book/getBooks/getBooks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    upload: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, user, sentiment, bookId, book, post;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                user = request.user;
                sentiment = args.sentiment, bookId = args.bookId;
                _context.next = 6;
                return (0, _getBooks["default"])({
                  term: {
                    bookId: bookId
                  }
                });

              case 6:
                book = _context.sent;
                _context.next = 9;
                return _prismaClient.prisma.createPost({
                  sentiment: sentiment,
                  user: {
                    connect: {
                      id: user.id
                    }
                  }
                });

              case 9:
                post = _context.sent;
                _context.next = 12;
                return _prismaClient.prisma.createBook({
                  isbn: book.isbn,
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

              case 12:
                return _context.abrupt("return", post);

              case 13:
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