//Примитивные типы данных

//Number
// console.log(1/0);
// console.log(typeof NaN) 

//Оператор Typeof показывает тип данных после typeof

//String Строки


// // const myString = "Строка \"текст\" текст";

// // const anotherString = "Другая строка"

// // const templateString = `шаблонная строка ${anotherString}` 

// // console.log(templateString) 

// //Булевый тип Boolean

// const isAdmin = true;
// const isUser = false;

// //Null

// const emptyVariable = null;

// // Underfined
// let userName;
// console.log{userName}



//Непримитивные типы данных

// const someName = "Petya";

// const user = {
//     Name: someName,
//     lastname: "Ivanov",
//     age: 23,
//     citizenship: "Russia",

// };

// console.log(user.age);

// Оператор typeof

// typeof null - всегда объект! Ошибка JS!

// console.log(typeof someName);

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// //строковое преобразование

// const myVar = true

// const myVarToString = String(myVar);

// console.log(myVarToString);

//Численное преобразование

// const myVar = "123";
// const myVarToNumber = Number(myVar);  // или const myVarToNumber = +myVar;

// console.log(typeof myVarToNumber);

// Логическое преобразование

// const myVar = 1;
// console.log(Boolean(myVar)) // или !!myVar 

// Математические операторы

// бинарный плюс

// const myNumber = 1;
// const newNumber = 2;
// const myString = "строка";

// console.log(myNumber+newNumber);

// Сравнение строк

// const string1 = "строка";
// const string2 = "солнце";

// console.log(string1>=string2)

//     const userTypes = {
//         admin: "admin",
//         user: "user",
//         teacher: "teacher",
//         contentManager: "contentManager"
//     }

// const serverDataUserType = "user";

// if (serverDataUserType === userTypes.admin) {
//     console.log("показать весь контент")
// } else
//     console.log("показать ограниченный контент")

