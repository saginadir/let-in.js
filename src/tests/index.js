import {letInRun, letIn} from '../index';

const test1 = letIn(
  () => 1,
  () => 2,
  (a, b) => a + b
);

if(test1() !== 3) {
  throw Error("Test 1 failed");
}

const test2 = (x, y) => letInRun(
  () => x,
  () => y,
  (a, b) => a + b
);

if(test1() !== 3) {
  throw Error("Test 1 failed");
}
console.log("test 1 passed");

if(test2(1, 2) !== 3) {
  throw Error("Test 2 failed");
}
console.log("test 2 passed");
