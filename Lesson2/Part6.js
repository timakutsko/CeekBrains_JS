"use strict";
let summ = prompt("Введите сумму");
//alert("Ваша сумма 101 рубль успешно зачислена");
let rubleEnd = null;
switch (summ % 10) {
    case 1:
        rubleEnd = 'ь';
        break;
    case 2:
    case 3:
    case 4:
        rubleEnd = 'я';
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
        rubleEnd = 'ей';
        break;
}
alert(`Ваша сумма ${summ} рубл${rubleEnd} успешно зачислена`);