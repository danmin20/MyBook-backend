"use strict";

var regeneratorRuntime = require("regenerator-runtime");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var DELETE = "DELETE";
var EDIT = "EDIT";
var _default = {
  Mutation: {
    editPost: function () {
      var _editPost = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, title, sentiment, action, user, post;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id, title = args.title, sentiment = args.sentiment, action = args.action;
                user = request.user;
                _context.next = 6;
                return _prismaClient.prisma.$exists.post({
                  id: id,
                  user: {
                    id: user.id
                  }
                });

              case 6:
                post = _context.sent;

                if (!post) {
                  _context.next = 16;
                  break;
                }

                if (!(action === EDIT)) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", _prismaClient.prisma.updatePost({
                  data: {
                    title: title,
                    sentiment: sentiment
                  },
                  where: {
                    id: id
                  }
                }));

              case 12:
                if (!(action === DELETE)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", _prismaClient.prisma.deletePost({
                  id: id
                }));

              case 14:
                _context.next = 17;
                break;

              case 16:
                throw Error("오류 발생", "재시도 하십시오.");

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editPost(_x, _x2, _x3) {
        return _editPost.apply(this, arguments);
      }

      return editPost;
    }()
  }
};
exports["default"] = _default;