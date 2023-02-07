
document.write("Ctrl + Shift + J");

//Объявление переменной
var myIncome;
//Другой вариант
let myIncome2;

//Мы можем изменить их значение
var income = 300;
income = 400;
console.log(income);

let price = 76;
price = 54;
console.log(price);
console.log("");

//Экранизируем кавычки
var companyName = "Бюро \"Рога и копыта\"";
//Другие варианты
var companyName1 = "Бюро 'Рога и копыта'";
var companyName2 = 'Бюро "Рога и копыта"';
console.log(companyName);
console.log(companyName1);
console.log(companyName2);
console.log("");

//Object может иметь различные свойства и методы
var user = {name: "Tom", age: 24};
console.log(user.name, user.age);
console.log("");

//С помощью оператора typeof можно получить тип переменной
var stName = "Tom";
console.log(typeof stName);

var num = 45.8;
console.log(typeof num);

var isEnabled = true;
console.log(typeof isEnabled);

var undefVariable;
console.log(typeof undefVariable);
console.log("");

//Операции с переменными
//Сложение
var x = 10;
var y = x + 50;
console.log(y);
//Вычитание
var x = 100;
var y = x - 50;
console.log(y);
//Умножение
var x = 4;
var y = x * 5;
console.log(y);
//Деление
var x = 40;
var y = x / 5;
console.log(y);
//Деление по модулю
var x = 40;
var y = x % 7;
console.log(y); //5
/*  
 *  Результат будет 5, так как наибольшее целое число,
 *  которое меньше или равно 40 и при этом делится на 7 равно 35, а 40 - 35 = 5.
 */
 console.log("");
 
//Инкремент
var x = 5;
x++;
console.log(x); // x = 6

//Декремент
var x = 5;
x--;
console.log(x); // x = 4
console.log("");

//Приоритеты операции
var x = 10;
var y = 5 + (6 - 2) * --x;
console.log(y); //41
console.log("");

//Операции присваивания
//+=
var a = 20;
a += 5; //аналогично a = a + 5
console.log(a);
//-=
var a = 20;
a -= 5; //аналогично a = a - 5
console.log(a);
//*=
var a = 20;
a *= 5; //аналогично a = a * 5
console.log(a);
///=
var a = 20;
a /= 5; //аналогично a = a / 5
console.log(a);
//%=
var a = 20;
a %= 5; //аналогично a = a % 5
console.log(a);
console.log("");

//Операторы сравнения
/* 
 * === Оператор тождественности сравнивает два значения и их тип
 * !== Сравнивает два значения, и если они не равны, возвращает в true, иначе false
 */
 //==
var income = 100;
var strincome = "100";
var result = income == strincome;
console.log(result); //true
//===
var income = 100;
var strincome = "100";
var result = income === strincome;
console.log(result); //false
console.log("");

//Логические операции
//&&
var income = 100;
var percent = 10;
var result = income > 50 && percent < 12;
console.log(result); // true
//||
var income = 100;
var isDeposit = true;
var result = income > 50 || isDeposit == true;
console.log(result); // true
//!
var income = 100;
var result = !(income > 50);
console.log(result); // false, так как income > 50 возвращает true

var isDeposit = false;
var result = !isDeposit;
console.log(result); // true
console.log("");

//Операции со строками
var name = "Tom";
var surname = "Soyer";
var fullname = name + " " + surname;
console.log(fullname);
console.log("");