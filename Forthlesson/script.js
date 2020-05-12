function check() {
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let mark = document.getElementById("mark").value;
    let sex = document.forms.form.elements.sex;

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

function clear() {
    localStorage.clear()
}

const ul = document.querySelector('ul')

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
    ul.append(li)
}