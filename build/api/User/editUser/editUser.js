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
    editUser: function () {
      var _editUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, name, bio, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated;
                isAuthenticated(request);
                name = args.name, bio = args.bio;
                user = request.user;
                return _context.abrupt("return", _prismaClient.prisma.updateUser({
                  where: {
                    id: user.id
                  },
                  data: {
                    name: name,
                    bio: bio
                  }
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function editUser(_x, _x2, _x3) {
        return _editUser.apply(this, arguments);
      }

      return editUser;
    }()
  }
};
exports["default"] = _default;