function validate() {
    let form = document.forms.test;
    let mark = 0;
    list = Array.from(document.querySelectorAll("div.alert"))
    if (parseInt(form.elements.t1.value) === 66) {
        mark++
        list[0].className = "alert alert-success"
    } else {
        list[0].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t2.value) === 135) {
        mark++
        list[1].className = "alert alert-success"
    } else {
        list[1].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t3.value) === 35) {
        mark++
        list[2].className = "alert alert-success"
    } else {
        list[2].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t4.value) === 196) {
        mark++
        list[3].className = "alert alert-success"
    } else {
        list[3].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t5.value) === -11) {
        mark++
        list[4].className = "alert alert-success"
    } else {
        list[4].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t6.value) === 4) {
        mark++
        list[5].className = "alert alert-success"
    } else {
        list[5].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t7.value) === 27) {
        mark++
        list[6].className = "alert alert-success"
    } else {
        list[6].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t8.value) === 1331) {
        mark++
        list[7].className = "alert alert-success"
    } else {
        list[7].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t9.value) === 4) {
        mark++
        list[8].className = "alert alert-success"
    } else {
        list[8].className = "alert alert-danger"
    }
    if (parseInt(form.elements.t10.value) === 25) {
        mark++
        list[9].className = "alert alert-success"
    } else {
        list[9].className = "alert alert-danger"
    }
    document.getElementById("result").innerText = (mark / 10) * 100 + "%"
}
