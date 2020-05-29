class User {
    constructor(surname, name, lastName, dateOfBirth, address, mark1, mark2, mark3, faculty) {
        this.surname = surname;
        this.name = name;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.mark1 = mark1;
        this.mark2 = mark2;
        this.mark3 = mark3;
        this.faculty = faculty;
    }
}

function check() {
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let mark1 = document.getElementById("mark1").value;
    let mark2 = document.getElementById("mark2").value;
    let mark3 = document.getElementById("mark3").value;
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
    if (mark1 === '' || mark1 > 100 || mark1 < 0) {
        errors++
        document.getElementById("mark1").className = 'form-control is-invalid'
    } else {
        document.getElementById("mark1").className = 'form-control is-valid'
    }
    if (mark2 === '' || mark2 > 100 || mark2 < 0) {
        errors++
        document.getElementById("mark2").className = 'form-control is-invalid'
    } else {
        document.getElementById("mark2").className = 'form-control is-valid'
    }
    if (mark3 === '' || mark3 > 100 || mark3 < 0) {
        errors++
        document.getElementById("mark3").className = 'form-control is-invalid'
    } else {
        document.getElementById("mark3").className = 'form-control is-valid'
    }
    if (errors === 0) {
        getFaculty(mark1 + mark2 + mark3)
        return true
    }

}

function getFaculty(mark) {
    mark = mark / 3
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
    if (check()) {
        let surname = document.getElementById("surname").value;
        let name = document.getElementById("name").value;
        let lastName = document.getElementById("lastName").value;
        let dateOfBirth = document.getElementById("date").value;
        let address = document.getElementById("address").value;
        let mark1 = document.getElementById("mark1").value;
        let mark2 = document.getElementById("mark2").value;
        let mark3 = document.getElementById("mark3").value;
        let faculty = getFaculty(mark1 + mark2 + mark3);
        app.students = app.students.filter(element =>
            !(element.surname == surname & element.name == name
                & element.lastName == lastName & element.dateOfBirth == dateOfBirth
                & element.address == address & element.mark1 == mark1
                & element.mark2 == mark2 & element.mark3 == mark3
                & element.faculty == faculty))
        app.students.push(new User(surname, name, lastName, dateOfBirth, address, mark1, mark2, mark3, faculty))
        localStorage.setItem("items", JSON.stringify(app.students))
    }
}

function clean() {
    localStorage.clear();
    app.students = []
}

function todefault() {
    list = Array.from(document.querySelectorAll("input.form-control"))
    list.forEach(element => {
        element.classList.remove("is-invalid", "is-valid")
    })
    document.getElementById("result").innerText = "";
}