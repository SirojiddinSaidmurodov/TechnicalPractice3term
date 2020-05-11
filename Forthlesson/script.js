function check() {
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let faculty = document.getElementById("faculty").value;
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
    if (!sex[0].checked && !sex[1].checked) {
        errorMessage += "Укажите пол!\n"
    }
    if (dateOfBirth === '') {
        errorMessage += "Укажите дату рождения!\n"
    }
    if (address === '') {
        errorMessage += "Введите адрес проживания!\n"
    }
    if (faculty === '') {
        errorMessage += "Укажите направление!\n"
    }
    document.getElementById("error").innerText = errorMessage
}

function save() {
    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let dateOfBirth = document.getElementById("date").value;
    let address = document.getElementById("address").value;
    let faculty = document.getElementById("faculty").value;
    let sex = document.forms.form.elements.sex;

    localStorage.setItem("surname", surname)
    localStorage.setItem("name", name)
    localStorage.setItem("lastname", lastName)
    localStorage.setItem("date", dateOfBirth)
    localStorage.setItem("address", address)
    localStorage.setItem("faculty", faculty)
    localStorage.setItem("sex", sex)
}

function clear() {
    localStorage.clear()
}

function recall() {
    document.getElementById("surname").value = localStorage.getItem("surname");
    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("lastName").value = localStorage.getItem("lastname");
    document.getElementById("date").value = localStorage.getItem("date");
    document.getElementById("address").value = localStorage.getItem("address");
    document.getElementById("faculty").value = localStorage.getItem("faculty");
    document.forms.form.elements.sex = localStorage.getItem("sex");
}
