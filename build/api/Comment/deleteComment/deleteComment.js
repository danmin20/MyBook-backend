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
  Mutation: {
    deleteComment: function () {
      var _deleteComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, user, comment;
        return _regenerator["default"].wrap(function _callee$(_context) {
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