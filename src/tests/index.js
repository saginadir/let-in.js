import {letInRun, letIn} from '../index';

const test1 = letIn(
  () => 1,
  a => 2 + a,
  (a, b) => a + b
);


if(test1() != 4) {
  throw Error("Test 1 failed");
}
console.log("test 1 passed");

const test2 = (x, y) => letInRun(
  () => x,
  a => y + a,
  (a, b) => a + b
);

if(test2(1, 2) !== 4) {
  throw Error("Test 2 failed");
}
console.log("test 2 passed");
