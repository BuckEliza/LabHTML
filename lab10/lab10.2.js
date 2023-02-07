
document.write("Ctrl + Shift + J");

let name = "Ilya";
alert(`hello ${1}`);
alert(`hello ${"name"}`);
alert(`hello ${name}`);

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