"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = exports.sendSecretMail = exports.generateSecret = void 0;

require("./env");

var _words = require("./words");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _nodemailerSendgridTransport = _interopRequireDefault(require("nodemailer-sendgrid-transport"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateSecret = function generateSecret() {
  var randomFirst = Math.floor(Math.random() * _words.adjectives.length);
  var randomSecond = Math.floor(Math.random() * _words.nouns.length);
  return "".concat(_words.adjectives[randomFirst], " ").concat(_words.nouns[randomSecond]);
};

exports.generateSecret = generateSecret;

var sendMail = function sendMail(email) {
  var options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };

  var client = _nodemailer["default"].createTransport((0, _nodemailerSendgridTransport["default"])(options));

  return client.sendMail(email);
};

var sendSecretMail = function sendSecretMail(address, secret) {
  var email = {
    from: "mybook@gmail.com",
    to: address,
    subject: "Login Secret for Mybook!",
    html: "Hello! Your login secret is <strong>".concat(secret, "</strong>.<br/>Copy paste on the app/website to log in.")
  };
  return sendMail(email);
};

exports.sendSecretMail = sendSecretMail;

var generateToken = function generateToken(id) {
  return _jsonwebtoken["default"].sign({
    id: id
  }, process.env.JWT_SECRET);
};

exports.generateToken = generateToken;