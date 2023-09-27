
//                   0                   1                    2
//                0     1           0         1         0          1
let states = [ ["pune","nagpur"],["jaipur","udaipur"],["kanpur","varanasi"]]
 console.log(states[0][1])
 console.log(states[1][1])
 console.log(states[2][0])

 let q1 = states.flat()
 console.log(q1)

//               0        1        2       3        4       5
 let names = ["chinmay","rajan","satish","komal","sameer","sham"]
//              -6       -5        -4      -3      -2       -1 
//names.slice(startIndex,endIndex(not included))
console.log(names.slice(2))
console.log(names.slice(1,5))
console.log(names.slice(-5))
console.log(names.slice(1,-1))
console.log(names.slice(-5,4))
console.log(names.slice(-1,-3))
console.log(names.slice(-5,-3))
console.log(names)

// index()
//              0       1         2         3
let cities = ["pune","nagpur","chennai","kolkata"]
let q2 = cities.indexOf("nagpur")
let q3 = cities.indexOf("Nagpur")
console.log(q2)
console.log(q3)

// concat()
let fruits = ["apple","mango","banana"]
let fruitsB = ["chikoo","grapes"]
let fruitsE = fruits.concat(fruitsB)
console.log(fruitsE)

//at()
//               0         1         2          3
let country = ["india","pakistan","srilanka","bangladesh"]
let q4 = country.at(2)
console.log(q4)

// reverse()
let q5 = country.reverse()
console.log(country)
// [ 'bangladesh', 'srilanka', 'pakistan', 'india' ]

// sort()
country.sort()
console.log(country)

// fill 
//            0  1  2   3  4  5  6  7  8  9
let marks =  [55,66,77,88,99,100,99,55,66,77]
marks.fill('-',2,6)
console.log(marks)

// join()
// let info = ["chinmay","deshpande",7709192441]
// let q6  = info.join("-")
// console.log(q6)

// splice()
//               0         1       2      3
let studs = ["chinmay","shirish","ram","sham"]
// studs.pop()
// studs.shift()
// studs.splice(startIndex,numberOfELementTobeDeleted)

// studs.splice(2,1)
// console.log(studs)

studs.splice(2,2,"ninad","vijeet","ram","sham")
console.log(studs)