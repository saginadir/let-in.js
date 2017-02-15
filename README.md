# let-in.js - Let expressions introduced into JavaScript

### This is still in Beta, so use at your own risk, API might change and break.

Let expressions make everything simpler. Creates smaller and more resuable functions.

## letIn

Receives functions and calls the them in order, each function receives the previous results by order.

```js
import { letIn } from 'let-in'

const result = letIn(
  () => 1,
  (a) => 2 + a,
  (a, b) => 3 + a + b,
  (a, b, c) => a + b + c,
)

console.log(result); // 11
```

Wrap letIn in a function to create a new function with the Let In Expression structure

```js
import { letIn } from 'let-in'

const fn = (x, y) => letIn(
  () => 1 + x,
  (a) => 2 + a,
  (a, b) => 3 + a + b,
  (a, b, c) => a + b + c + y,
)

console.log(fn(1, 1)); // 16
```

## Examples

### Before

```js
  const before = (a, b, c) => {
    const x1 = a ^ 2;
    const x2 = b / 3;
    const x3 = c - 1;
    return x1 + x2 + x3;
  }
```

### After

```js
  const after = (a, b, c) => letIn(
    () => a ^ 2,
    () => b / 3,
    () => c - 1,
    (x1, x2, x3) => x1 + x2 + x3
  )
```


### After2

```js
  const after = (a, b, c) => letIn(
    () => a ^ 2,
    () => b / 3,
    () => c - 1,
    (...xs) => xs.reduce((sum, x) => sum + x, 0);
  )
```

### After3 + lambda-light 

```js
  const after = (a, b, c) => letIn(
    () => a ^ 2,
    () => b / 3,
    () => c - 1,
    (...xs) => reduce(sum, 0, xs);
  )
```
