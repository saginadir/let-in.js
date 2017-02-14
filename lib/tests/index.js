"use strict";

var _index = require("../index");

var test1 = (0, _index.letIn)(function () {
  return 1;
}, function () {
  return 2;
}, function (a, b) {
  return a + b;
});

if (test1() !== 3) {
  throw Error("Test 1 failed");
}

var test2 = function test2(x, y) {
  return (0, _index.letInRun)(function () {
    return x;
  }, function () {
    return y;
  }, function (a, b) {
    return a + b;
  });
};

if (test1() !== 3) {
  throw Error("Test 1 failed");
}
console.log("test 1 passed");

if (test2(1, 2) !== 3) {
  throw Error("Test 2 failed");
}
console.log("test 2 passed");