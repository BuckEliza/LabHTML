//Что выведет следующий скрипт:
let name = "Jhoe";
alert(`Hello ${1}`);
alert(`Hello ${"name"}`);
alert(`Hello ${name}`);

//Пример работы префиксного и постфиксного инкремента
//Постфиксный инкремент
console.log("Постфиксный инкремент");
var a = 0;
while (true) {
    if (a < 5) {
        console.log(a++);
    } else {
        break;
    }
}
console.log(" ");
//Префиксный инкремент
console.log("Префиксный инкремент");
var b = 0;
while (true) {
    if (b < 5) {
        console.log(++b);
    } else {
        break;
    }
}

//Тождественное сравнение
var myVar = 1234,
    myVar2 = "1234";
var result = myVar === myVar2;

document.write("Тождественное сравнение = " + result);