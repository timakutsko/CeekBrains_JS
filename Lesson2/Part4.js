"use strict";
/**
* Сложение
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function adding (num1, num2){
    let res = num1 + num2;
    return res;
}

/**
* Разница
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function subtraction (num1, num2){
    let res = num1 - num2;
    return res;
}

/**
* Деление
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function division (num1, num2){
    let res = num1 / num2;
    return res;
}

/**
* Умножение
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function multiplication (num1, num2){
    let res = num1 * num2;
    return res;
}

let addRes = adding(3, 7);
alert(addRes);
let subtrRes = subtraction(15, 4);
alert(subtrRes);
let divRes = division(15, 3);
alert(divRes);
let multRes = multiplication(6, 3);
alert(multRes);
