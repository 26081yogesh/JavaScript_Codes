function add(num1, num2){
    return num1 + num2;
}

console.log(add(10, 2));

function square(num){
    return num ** 2;
}

let ans = square(square(5));
console.log("Square of the number is :- " + ans);