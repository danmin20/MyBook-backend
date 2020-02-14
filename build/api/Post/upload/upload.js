"use strict";

var regeneratorRuntime = require("regenerator-runtime");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

var _getBooks = require("../../../getBooks");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    upload: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, user, title, sentiment, bookId, _ref2, _ref3, book, post;

        return regeneratorRuntime.wrap(function _callee$(_context) {
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
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 1);
                book = _ref3[0];
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