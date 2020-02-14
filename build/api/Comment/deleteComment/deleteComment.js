"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  Mutation: {
    deleteComment: function () {
      var _deleteComment = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, user, comment;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id;
                user = request.user;
                _context.next = 6;
                return _prismaClient.prisma.$exists.comment({
                  id: id,
                  user: {
                    id: user.id
                  }
                });

              case 6:
                comment = _context.sent;

                if (!comment) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", _prismaClient.prisma.deleteComment({
                  id: id
                }));

              case 11:
                throw Error("오류 발생", "재시도 하십시오.");

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function deleteComment(_x, _x2, _x3) {
        return _deleteComment.apply(this, arguments);
      }

      return deleteComment;
    }()
  }
};
exports["default"] = _default;