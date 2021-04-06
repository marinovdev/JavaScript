function rootF(callback) {
    let value = 1;
    callback(value)
};

let outsideFuncScope;

let result = rootF( (v) => {
    outsideFuncScope = v;
    return v;
});

console.log(result); //undefined
console.log(outsideFuncScope); // 1

