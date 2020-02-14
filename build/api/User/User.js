"use strict";

var regeneratorRuntime = require("regenerator-runtime");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _prismaClient = require("../../../generated/prisma-client");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  User: {
    posts: function posts(_ref) {
      var id = _ref.id;
      return _prismaClient.prisma.user({
        id: id
      }).posts();
    },
    following: function following(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.user({
        id: id
      }).following();
    },
    followers: function followers(_ref3) {
      var id = _ref3.id;
      return _prismaClient.prisma.user({
        id: id
      }).followers();
    },
    likes: function likes(_ref4) {
      var id = _ref4.id;
      return _prismaClient.prisma.user({
        id: id
      }).likes();
    },
    comments: function comments(_ref5) {
      var id = _ref5.id;
      return _prismaClient.prisma.user({
        id: id
      }).comments();
    },
    postsCount: function postsCount(_ref6) {
      var id = _ref6.id;
      return _prismaClient.prisma.postsConnection({
        where: {
          user: {
            id: id
          }
        }
      }).aggregate().count();
    },
    followingCount: function followingCount(_ref7) {
      var id = _ref7.id;
      return _prismaClient.prisma.usersConnection({
        where: {
          followers_some: {
            id: id
          }
        }
      }).aggregate().count();
    },
    followersCount: function followersCount(_ref8) {
      var id = _ref8.id;
      return _prismaClient.prisma.usersConnection({
        where: {
          following_some: {
            id: id
          }
        }
      }).aggregate().count();
    },
    isFollowing: function () {
      var _isFollowing = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(parent, _, _ref9) {
        var request, user, parentId;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref9.request;
                user = request.user;
                parentId = parent.id;
                _context.prev = 3;
                return _context.abrupt("return", _prismaClient.prisma.$exists.user({
                  AND: [{
                    id: parentId
                  }, {
                    followers_some: {
                      id: user.id
                    }
                  }]
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", false);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 7]]);
      }));

      function isFollowing(_x, _x2, _x3) {
        return _isFollowing.apply(this, arguments);
      }

      return isFollowing;
    }(),
    isSelf: function isSelf(parent, _, _ref10) {
      var request = _ref10.request;
      var user = request.user;
      var parentId = parent.id;
      return user.id === parentId;
    }
  }
};
exports["default"] = _default;