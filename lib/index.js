"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var letIn = exports.letIn = function letIn() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    var letParams = [];
    for (var i = 0; i < fns.length - 1; i += 1) {
      letParams.push(fns[i].apply(null, letParams));
    }
    return fns[fns.length - 1].apply(null, letParams);
  };
};

var letInRun = exports.letInRun = function letInRun() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return letIn.apply(null, fns)();
};

exports.default = {
  letIn: letIn,
  letInRun: letInRun
};