class User {
    constructor(surname, name, lastName, dateOfBirth, address, mark, faculty) {
        this.surname = surname;
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.mark = mark;
        this.faculty = faculty;
    }
}

function check() {
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let mark = document.getElementById("mark").value;

    let errorMessage = ''
    if (surname === '') {
        errorMessage += "Введите фамилию!\n"
    }
    if (name === '') {
        errorMessage += "Введите имя!\n"
    }
    if (lastName === '') {
        errorMessage += "Введите отчество!\n"
    }
    if (dateOfBirth === '') {
        errorMessage += "Укажите дату рождения!\n"
    }
    if (address === '') {
        errorMessage += "Введите адрес!\n"
    }
    if (mark === '') {
        errorMessage += "Укажите оценку!\n"
    }
    if (errorMessage.length > 0) {
        document.getElementById("error").innerText = errorMessage
        document.getElementById("result").innerText = ''
    } else {
        document.getElementById("error").innerText = ''
        return surname + " " + name[0] + ". " + lastName[0] + ".   ::  " + getFaculty(mark)
    }
}

function getFaculty(mark) {
    let faculty = ''
    if (mark > 90) {
        faculty = "ПИ"
    } else if (mark > 75) {
        faculty = "ПМИ"
    } else if (mark > 50) {
        faculty = "ИБ"
    } else {
        faculty = "Экзамен не пройден!"
    }
    document.getElementById("result").innerText = "Ваш результат: " + faculty
    return faculty
}
let users = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
let data = JSON.parse(localStorage.getItem('items'))


data.forEach(item => {
    contentUpdate(item)
})

function save() {
    let res = check()
    users.push(res)
    localStorage.setItem("items", JSON.stringify(users))
    contentUpdate(res)
}

function contentUpdate(text) {
    let li = document.createElement('li')
    li.textContent = text
    document.querySelector('ul').append(li)
}

function saveUser() {
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let mark = document.getElementById("mark").value;
    let faculty = getFaculty(mark);
    localStorage.setItem("lastUser", JSON.stringify(new User(surname, name, lastName, dateOfBirth, address, mark, faculty)))
}

function restore() {
    let parse = JSON.parse(localStorage.getItem('lastUser'));
    if (parse !== null) {
        console.log(parse)
        document.getElementById("surname").value = parse.surname;
        document.getElementById("name").value = parse.name;
        document.getElementById("lastName").value = parse.lastName;
        document.getElementById("date").value = parse.dateOfBirth;
        document.getElementById("address").value = parse.address;
        document.getElementById("mark").value = parse.mark;
    }
}