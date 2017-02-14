"use strict";

var _index = require("../index");

var test1 = (0, _index.letIn)(function () {
  return 1;
}, function (a) {
  return 2 + a;
}, function (a, b) {
  return a + b;
});

if (test1() != 4) {
  throw Error("Test 1 failed");
}
console.log("test 1 passed");

var test2 = function test2(x, y) {
  return (0, _index.letInRun)(function () {
    return x;
  }, function (a) {
    return y + a;
  }, function (a, b) {
    return a + b;
  });
};

if (test2(1, 2) !== 4) {
  throw Error("Test 2 failed");
}
console.log("test 2 passed");