//                0     1    2    3
let birthYear = [1989,1990,1991,1992]
let ages = [] // [34,33,32,31]
// [34,33,32,31]

for(let i =  0 ; i < 4 ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let x = 2023 - birthYear[i] // 34
    ages.push(x)
}
console.log(ages)
// i = 0
// i = 1
// i = 2
// i = 3
// program 2
birthYear = [1989,1990,1991,1992]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q1)

// program 3
let numbers = [11,22,33,44,55]
// [13,24,35,46,57]
let q3 = numbers.map(function(el){
    return el + 2
})
console.log(q3)

// program 4
//           0   1  2  3  4  5
let marks = [55,66,77,88,33,44]
let above60 = [] // [66,77,88]
// [66,77,88]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])
    if(marks[i] > 60){
        above60.push(marks[i])
    }
}
console.log(above60)

// program 4

marks = [55,66,77,88,33,44]

let q4 = marks.filter(function(el,index,arr){
   // console.log(el,index,arr)
   return el > 60
})
console.log(q4)

// program 5

let numbersB = [11,22,33] // 66
let total = 0
for(let i = 0 ; i < numbersB.length ; i++){
    //console.log(i)
    //console.log(numbersB[i])
    total = total +  numbersB[i]
    //        0   +      11   ======> 11
    //        11  +      22   ======> 33
    //        33  +      33   ======> 66
}
console.log(total)


// program 6
numbersB = [11,22,33]
let q6 = numbersB.reduce(function(acc,el,index,arr){
    return acc + el // 66
},0)

console.log(q6)




