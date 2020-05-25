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
    let errors = 0
    if (surname === '') {
        errors++
        document.getElementById("surname").className = 'form-control is-invalid'
    } else {
        document.getElementById("surname").className = 'form-control is-valid'
    }
    if (name === '') {
        errors++
        document.getElementById("name").className = 'form-control is-invalid'
    } else {
        document.getElementById("name").className = 'form-control is-valid'
    }
    if (lastName === '') {
        errors++
        document.getElementById("lastName").className = 'form-control is-invalid'
    } else {
        document.getElementById("lastName").className = 'form-control is-valid'
    }
    if (dateOfBirth === '') {
        errors++
        document.getElementById("date").className = 'form-control is-invalid'
    } else {
        document.getElementById("date").className = 'form-control is-valid'
    }
    if (address === '') {
        errors++
        document.getElementById("address").className = 'form-control is-invalid'
    } else {
        document.getElementById("address").className = 'form-control is-valid'
    }
    if (mark === '') {
        errors++
        document.getElementById("mark").className = 'form-control is-invalid'
    } else {
        document.getElementById("mark").className = 'form-control is-valid'
    }
    if (errors === 0) {
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

users = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

users.forEach(item => {
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