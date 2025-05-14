
let Calculate = (para01, para02, para03) => {
    if (para03 == '+') {
        return para01 + para02;
    } else if (para03 == '-') {
        return para01 - para02;
    } else if (para03 == '*') {
        return para01 * para02;
    } else {
        return 'Invalid operator';
    }
};

console.log(Calculate(4, 5, '+'));  // Output: 9

let fun=()=>{}
console.log(typeof fun);
