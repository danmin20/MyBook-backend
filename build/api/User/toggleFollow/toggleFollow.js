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
    toggleFollow: function () {
      var _toggleFollow = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, user, existingFollow;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                id = args.id;
                user = request.user;
                _context.prev = 4;
                _context.next = 7;
                return _prismaClient.prisma.$exists.user({
                  AND: [{
                    id: id
                  }, {
                    followers_some: {
                      id: user.id
                    }
                  }]
                });

              case 7:
                existingFollow = _context.sent;

                if (!existingFollow) {
                  _context.next = 13;
                  break;
                }

                _context.next = 11;
                return _prismaClient.prisma.updateUser({
                  where: {
                    id: user.id
                  },
                  data: {
                    following: {
                      disconnect: {
                        id: id
                      }
                    }
                  }
                });

              case 11:
                _context.next = 15;
                break;

              case 13:
                _context.next = 15;
                return _prismaClient.prisma.updateUser({
                  where: {
                    id: user.id
                  },
                  data: {
                    following: {
                      connect: {
                        id: id
                      }
                    }
                  }
                });

              case 15:
                return _context.abrupt("return", true);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", false);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 18]]);
      }));

      function toggleFollow(_x, _x2, _x3) {
        return _toggleFollow.apply(this, arguments);
      }

      return toggleFollow;
    }()
  }
};
exports["default"] = _default;