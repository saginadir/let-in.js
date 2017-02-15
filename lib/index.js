"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var letInLazy = exports.letInLazy = function letInLazy() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    var results = fns.reduce(function (letParams, fn) {
      letParams.push(fn.apply(null, letParams));return letParams;
    }, []);
    return results[results.length - 1];
  };
};

var letIn = exports.letIn = function letIn() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return letIn.apply(null, fns)();
};

exports.default = {
  letIn: letIn,
  letInLazy: letInLazy
};