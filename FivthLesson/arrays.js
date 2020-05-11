let list1 = ['a', 'b', 'c']
list1.push(1, 2, 3)
console.log("task1")
console.log(list1)

let list2 = [1, 2, 3]
list2.reverse()
console.log("task2")
console.log(list2)

let list3 = [1, 2, 3]
list3.push(4, 5, 6)
console.log("task3")
console.log(list3)

let list4 = [1, 2, 3]
list4.unshift(4, 5, 6)
console.log("task4")
console.log(list4)

let list5 = ['js', 'css', 'jq']
console.log("task5")
console.log(list5[0])

console.log("task6")
console.log(list5[list5.length - 1])

let list7 = [1, 2, 3, 4, 5]
let listCopy = list7.slice(0, 3)
console.log("task7")
console.log(listCopy)

list7.splice(1, 2)
console.log("task8")
console.log(list7)

let list9 = [1, 2, 3, 4, 5]
list9.splice(3, 0, 'a', 'b', 'c')
console.log("task9")
console.log(list9)

let list10 = [1, 2, 3, 4, 5]
list10.splice(1, 0, 'a', 'b')
list10.splice(6, 0, 'c')
list10.splice(8, 0, 'e')
console.log("task10")
console.log(list10)

let list11 = [3, 4, 1, 2, 7]
list11.sort()
console.log("task11")
console.log(list11)

let obj = {js: "test", jq: "hello", css: "world"}
console.log("task12")
console.log(Object.keys(obj))