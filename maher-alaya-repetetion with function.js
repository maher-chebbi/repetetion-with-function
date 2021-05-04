/Repetition with Function
//04/05
//Maher+Alaya
//Q1
//answer
function sum(number) {
    if (number === 0) {
        return 0
    }
    return number + sum(number - 1)
}
sum(3)
6
//Q2
//Answer
function factorial(number) {
    if (number === 1) {
        return 1
    }
    return number * factorial(number - 1)
}
undefined
factorial(3)
6
//Q3
//answer
function repeatString(string, number) {
    if (number === 0) {
        return ''
    }
    return string + repeatString(string, number - 1)
}
//Q4
//Answer
function fibonacci(number) {
    if (n === 0 || n === 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
//Q5
//answer
function multiplyBy10(firstnumber, secondnumber) {
    if (secondnumber === 0) {
        return firstnumber
    }
    return firstnumber * multiplyBy10(10, secondnumber - 1)
}