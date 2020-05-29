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

function saveUser() {
    check()
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let mark = document.getElementById("mark").value;
    let faculty = getFaculty(mark);
    app.students.push(new User(surname, name, lastName, dateOfBirth, address, mark, faculty))
    localStorage.setItem("items", JSON.stringify(app.students))
}

function clean() {
    localStorage.clear();
    app.students = []
}