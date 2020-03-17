function read(x) {
    return parseFloat(document.getElementById(x).value);
}

function sum() {
    let a = read("a");
    let b = read("b");
    document.getElementById("result").innerText = a + b;
}

function sub() {
    let a = read("a");
    let b = read("b");
    document.getElementById("result").innerText = a - b;
}

function multiply() {
    let a = read("a");
    let b = read("b");
    document.getElementById("result").innerText = a * b;
}

function divide() {
    let a = read("a");
    let b = read("b");
    document.getElementById("result").innerText = a / b;
}

function mod() {
    let a = read("a");
    let b = read("b");
    document.getElementById("result").innerText = a % b;

}



let a = ["ОПиПК", "Культурология", "Матстат", "ОИБ", "ООАиП"];
console.log(...a);

author = {
    name: "Sirojiddin",
    surname: "Saidmurodov"
};
console.log(author);