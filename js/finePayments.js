"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів

1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер" 

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка" 

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */

 
//let fineNumberRegex = /^\d{3}$/;
let passportRegex = /^[А-Я]{2}\d{6}$/;
let creditCardNumberRegex = /^(4[0-9]{15})|(5[1-5][0-9]{14})$/;
let cvvRegex = /^\d{3}$/;

buttonSubmit.addEventListener('click',payFine);
function payFine(){
//
    let selectedFineIndex;
    for (let i = 0; i < DB.length; i++) {
        const fine = DB[i];
        if (fine.номер === fineNumber.value) {
            selectedFineIndex = i;
            break;
        }
    }
    if (selectedFineIndex === undefined) {
        alert('Невірний номер штрафу 😿');
        return;
    }
//
    if (!passportRegex.test(passport.value)) {
        alert('Не вірний паспортний номер 😿');
        return;
    }
//
    if (!creditCardNumberRegex.test(creditCardNumber.value)) {
        alert('Не вірна кредитна картка 😿');
        return;
    }
//
    if (!cvvRegex.test(cvv.value)) {
        alert('Не вірний cvv 😿');
        return;
    }
//
    if (DB[selectedFineIndex].сума != amount.value) {
        alert('Сума не співпадає 😿');
        return;
    }
//
    DB.splice(selectedFineIndex, 1);
//
    alert('Штраф сплачено 👍🏻')
//
    fineNumber.value = '';
    passport.value = '';
    creditCardNumber.value = '';
    cvv.value = '';
    amount.value = '';

}
