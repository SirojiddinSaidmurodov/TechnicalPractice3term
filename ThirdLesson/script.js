function validate() {
    let form = document.forms.test;
    var mark = 0
    if (parseInt(form.elements.t1.value) === 66) {
        mark++
    }
    if (parseInt(form.elements.t2.value) === 135) {
        mark++
    }
    if (parseInt(form.elements.t3.value) === 35) {
        mark++
    }
    if (parseInt(form.elements.t4.value) === 196) {
        mark++
    }
    if (parseInt(form.elements.t5.value) === -11) {
        mark++
    }
    if (parseInt(form.elements.t6.value) === 4) {
        mark++
    }
    if (parseInt(form.elements.t7.value) === 27) {
        mark++
    }
    if (parseInt(form.elements.t8.value) === 1331) {
        mark++
    }
    if (parseInt(form.elements.t9.value) === 4) {
        mark++
    }
    if (parseInt(form.elements.t10.value) === 25) {
        mark++
    }
    document.getElementById("result").innerText = (mark / 10) * 100 + "%"
}
