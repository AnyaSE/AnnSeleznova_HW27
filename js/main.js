function summation(k) {
    let sum = 0;
    return function() {
        return sum = sum + k;
    };
};

const totalSum = summation(4);

console.log(totalSum());
console.log(totalSum());
console.log(totalSum());
