function receivesAFunction(callback)  {
    callback();
}
function returnsANamedFunction() {
    return function namedFn() {
        console.log('this function have a name');
    };
}
function returnsAnAnonymousFunction() {
    return () => console.log('This function is anonymous.');
}