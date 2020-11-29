"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../generated/prisma-client");

var _default = {
  Post: {
    book: function book(_ref) {
      var id = _ref.id;
      return _prismaClient.prisma.post({
        id: id
      }).book();
    },
    comments: function comments(_ref2) {
      var id = _ref2.id;
      return _prismaClient.prisma.post({
        id: id
      }).comments();
    },
    user: function user(_ref3) {
      var id = _ref3.id;
      return _prismaClient.prisma.post({
        id: id
      }).user();
    },
    likes: function likes(_ref4) {
      var id = _ref4.id;
      return _prismaClient.prisma.post({
        id: id
      }).likes();
    },
    isLiked: function () {
      var _isLiked = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, _, _ref5) {
        var request, user, id;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref5.request;
                user = request.user;
                id = parent.id;
                return _context.abrupt("return", _prismaClient.prisma.$exists.like({
                  AND: [{
                    user: {
                      id: user.id
                    }
                  }, {
                    post: {
                      id: id
                    }
                  }]
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isLiked(_x, _x2, _x3) {
        return _isLiked.apply(this, arguments);
      }

      return isLiked;
    }(),
    likeCount: function likeCount(parent) {
      return _prismaClient.prisma.likesConnection({
        where: {
          post: {
            id: parent.id
          }
        }
      }).aggregate().count();
    },
    commentCount: function commentCount(parent) {
      return _prismaClient.prisma.commentsConnection({
        where: {
          post: {
            id: parent.id
          }
        }
      }).aggregate().count();
    }
  }
};
exports["default"] = _default;