function summation() {
    let sum = 0;
    return function(num) {
        return sum = sum + num;
    };
};

const totalSum = summation();

console.log(totalSum(4));
console.log(totalSum(5));