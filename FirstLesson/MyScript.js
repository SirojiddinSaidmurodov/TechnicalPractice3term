const title = ["Курс:", "Предмет:", "ФИО преподавателя:", "e-mail:",
    "Любимый вид спорта:", "Хобби:", "Любимый предмет:", "Фамилия:", "Имя:"];
let id = ["course", "subject", "teacher", "mail", "sport", "hobby", "favSub", "surname", "name"];


function init() {
    for (let i = 0; i < title.length; i++) {
        document.getElementById(id[i]).innerText = title[i];
    }
}

function fill() {
    for (let i = 0; i < title.length; i++) {
        document.getElementById(id[i]).innerText = title[i] + " " + prompt("Введите " + title[i]);
    }
}

init();
