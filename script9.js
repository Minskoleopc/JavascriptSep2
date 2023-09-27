// program 1
//                 0    1   2    3
let birthYear = [1990,1991,1992,1993]
let ages = [] //[33,32]
// [33,32,31,30]

for(let i = 0 ; i < 4 ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let x = 2023 - birthYear[i] // 33 , 32
    ages.push(x)
}
console.log(ages)

// program 2
//           0   1  2  3  4  5  6  7   8  9  10 11
let marks = [44,55,66,77,88,99,100,11,22,33,44,66]
let above50 = [] // [55]
//[55,66,77,88,99,100,66]

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    console.log(marks[i])
    if(marks[i] > 50){
        above50.push(marks[i])
    }
}
console.log(above50)


// program 3
//             0  1  2
let numbers = [11,22,33]
let total = 0
// 66
for(let i = 0 ; i < 3 ; i++){
   // console.log(i)
    //console.log(numbers[i])
    total  = total + numbers[i]
    //        0    +  11   ===> 11
    //        11   +  22   ===> 33
    //        33   +  33   ====> 66
}
console.log(total)


// program 4
//              0        1        2         3
let cities = ["pune"," mumbai","banglore","kolkata"]
console.log(cities[0])

for(let i = 0 ; i < cities.length ; i++){
    console.log("welcome "+ cities[i])
}