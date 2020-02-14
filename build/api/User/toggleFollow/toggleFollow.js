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
    toggleFollow: function () {
      var _toggleFollow = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, id, user, existingFollow;
        return regeneratorRuntime.wrap(function _callee$(_context) {
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