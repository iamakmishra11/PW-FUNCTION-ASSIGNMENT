function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return (...nextArgs) => curried(...args, ...nextArgs);
        }
    };
}

// Function to be curried
function add(a, b) {
    return a + b;
}

// Curried version of add function
const curriedAdd = curry(add);

// Test cases
console.log(curriedAdd(3)(4)); // Output: 7
console.log(curriedAdd(10, 20)); // Output: 30