class Student {
    constructor(name = "Andrew", surname = "Walker", mark = 80, term = 1, additionalPoints = 15) {
        this.name = name;
        this.surname = surname;
        this.mark = mark;
        this.term = term;
        this.additionalPoints = additionalPoints;
    }

    getMark() {
        let total = this.mark + this.additionalPoints
        console.log(total)
        return total
    }
}

let list = []
list.push(new Student())
list.push(new Student("John", "Smith", 50))
list.push(new Student("Alex", "Rubanov", 70, 2, 5))
list.push(new Student("Max", "Mad", 50, 1, 10))
list.push(new Student("Jason", "Born", 65, 1, 20))

let sum = 0
list.forEach(student => {
    sum += student.getMark()
})
let result = sum / 5
console.log(result)
