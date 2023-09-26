

// map()

let birthYear = [1989, 1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    return 2023 - el
})
console.log(q1)

let numbers = [11,22,33,44,55,66,77,88,99,100]
let q2 = numbers.map(function(el){
    return el + 10
})
console.log(q2)

//program2
// filter()
let marks  = [55,56,88,99,33,44,55,66,99,22]
// [88,99,99]
let q3 = marks.filter(function(el,index,arr){
    return el > 80
})
console.log(q3)
// program 3
// reduce
let mks = [11,22,33]
let q4 = mks.reduce(function(acc,el,index,arr){
    return acc + el //33
},0)
console.log(q4)
// program 4

let cities  = ["pune","banglore","kolkata","chennai"]
let q5 = cities.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(q5)


// program 5
// find()
//                  0  1  2  3  4   5  6   7
let transactions = [11,22,33,44,11,-55,66,-44]
let q6 = transactions.filter(function(el,index,arr){
    return el < 0
})
console.log(q6)

let q7 = transactions.find(function(el,index,arr){
    return el < 0
})
console.log(q7)

let q8 = transactions.findIndex(function(el,index,arr){
    return el < 0
})
console.log(q8)


// program 6

let numA  = [11,66,77,88,44,55,66,77,88,30]
let q9 = numA.every(function(el,index,arr){
    return el > 10
})
console.log(q9)

let q10 = numA.some(function(el,index,arr){
    return el > 800
})

console.log(q10)


// map() , filter(), reduce() , forEach()
// find() , findIndex() , some() , every()


// push()
let fruits = ["apple","mango","banana","grapes"]
console.log(fruits.length)

let q11 = fruits.push('chikoo')
console.log(fruits)
console.log(q11)

// unshift()
let q12 = fruits.unshift("papaya")
console.log(q12)
console.log(fruits)

// pop()
// [ 'papaya', 'apple', 'mango', 'banana', 'grapes', 'chikoo' ]
let q13 = fruits.pop()
console.log(q13)
console.log(fruits)

// shift()
let q14 = fruits.shift()
console.log(q14)
console.log(fruits)

// includes()

let q15 = fruits.includes("mango")
console.log(q15)










