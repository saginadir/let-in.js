# let-in.js - Let expressions introduced into JavaScript

### This is still in Beta, so use at your own risk, API might change and break.

Let expressions make everything simpler. Creates smaller and more resuable functions.

### Before

```
  const before = (a, b, c) => {
    const x1 = a ^ 2;
    const x2 = b / 3;
    const x3 = c - 1;
    return x1 + x2 + x3;
  }
```

### After

```
  const after = (a, b, c) => letIn(
    () => a ^ 2,
    () => b / 3,
    () => c - 1,
    (x1, x2, x3) => x1 + x2 + x3
  )
```


### After2

```
  const after = (a, b, c) => letIn(
    () => a ^ 2,
    () => b / 3,
    () => c - 1,
    (...xs) => xs.reduce((sum, x) => sum + x, 0);
  )
```
