# Safe Call 
GH_PAGES - https://sherjlok15.github.io/js_safe-call/

1. Create a function called `safeCall` that accepts another function `f` as a parameter, calls `f` without any arguments and returns `true` if `f` has executed without any errors or `false` if `f` has thrown an error. Sample usage:

    ```js
    safeCall(() => console.log('Hello!')); // true
    safeCall(() => JSON.parse('abc')); // false
    safeCall(() => false); // true
    safeCall(() => abc); // false
    ```

2. (optional) Make `safeCall` callable on any function: `f.safeCall(...)`. It should take the same parameters and has the same effect as `f.call(...)`, except in case when `f` throws an error, it should instead just return `null` without throwing any errors.
