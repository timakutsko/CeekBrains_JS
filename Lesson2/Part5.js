"use strict";
/**
* Сложение
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function adding (num1, num2) {
    let res = num1 + num2;
    return res;
}

/**
* Разница
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function subtraction (num1, num2) {
    let res = num1 - num2;
    return res;
}

/**
* Деление
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function division (num1, num2) {
    let res = num1 / num2;
    return res;
}

/**
* Умножение
* @param {num1} первое число
* @param {num2} второе число
* @returns {res} результат
*/
function multiplication (num1, num2) {
    let res = num1 * num2;
    return res;
}

/**
* Коллекция математических действий
* @param {arg1} первое число
* @param {arg2} второе число
* @param {operation} математическая операция: Сложение, Вычитание, Умножение или Деление
* @returns {res} результат
*/
function mathOperation (arg1, arg2, operation){
    switch (operation) {
        case 'Сложение':
            return adding(arg1, arg2);
        case 'Вычитание':
            return subtraction(arg1, arg2);
        case 'Умножение':
            return multiplication(arg1, arg2);
        case 'Деление':
            return division(arg1, arg2);
    }
}

alert(mathOperation(9, 3, 'Сложение'));
alert(mathOperation(9, 3, 'Вычитание'));
alert(mathOperation(9, 3, 'Умножение'));
alert(mathOperation(9, 3, 'Деление'));