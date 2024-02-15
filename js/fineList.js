"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

// function searchFines(searchKey){
    /*
     Напишіть свій код тут!
     Як ви бачите функція повертає статичні дані.
     Замість масиву який прописаний хардкодом, вам необхідно реалізувати цю функцію
     так, щоб вона повертала масив відповідно переданому значенню в функцію.
     Саме значення - це "Пошук за номером" або "Пошук за типом штрафу"
     Тип штрафу може бути тільки
     - Перевищення швидкості
     - Невірне паркування
     - Їзда у не тверезому стані
     */


//     return [
//         {номер: '001', тип: 'Перевищення швидкості', сума: 100, дата: '2023-01-15'}
//     ];
// }

function searchFines(searchKey) {
    console.log(searchKey);
    console.log(DB);

    if (!searchKey) {
        console.error("Не вказано значення для пошуку");
        return [];
    }

    const searchResult = DB.filter(element => {
        return element.номер.includes(searchKey) || element.тип.includes(searchKey);
    });

    if (searchResult.length > 0) {
        return searchResult;
    } else {
        alert("Штраф не знайдено");
        return [];
    }
}