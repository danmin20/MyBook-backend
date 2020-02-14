"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _getBooks = require("../../getBooks");

var resolvers = {
  Query: {
    books: function books(_, _ref) {
      var term = _ref.term,
          start = _ref.start;
      return (0, _getBooks.getBooks)(term, start);
    }
  }
};
exports.resolvers = resolvers;