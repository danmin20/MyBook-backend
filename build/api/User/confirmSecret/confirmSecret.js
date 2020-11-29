"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _prismaClient = require("../../../../generated/prisma-client");

var _utils = require("../../../utils");

var _default = {
  Mutation: {
    confirmSecret: function () {
      var _confirmSecret = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args) {
        var email, secret, user, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = args.email, secret = args.secret;
                _context.next = 3;
                return _prismaClient.prisma.user({
                  email: email
                });

              case 3:
                user = _context.sent;

                if (!(user.loginSecret === secret)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 7;
                return _prismaClient.prisma.updateUser({
                  where: {
                    id: user.id
                  },
                  data: {
                    loginSecret: ""
                  }
                });

              case 7:
                token = (0, _utils.generateToken)(user.id);
                console.log(token);
                return _context.abrupt("return", token);

              case 12:
                throw Error("Wrong email or secret key");

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function confirmSecret(_x, _x2) {
        return _confirmSecret.apply(this, arguments);
      }

      return confirmSecret;
    }()
  }
};
exports["default"] = _default;