

let x = 10 
console.log(x)
console.log(typeof x)
// 10 , -10 ,10.5 , -10.7 , 0

let a = true
console.log(a)
console.log(typeof a)
// true or false

let c = "chinmay"
console.log(c)
console.log(typeof c)
// "c" , "1", "asd12312", "asd23#@#@#"

// < , >, <= , >= 
// != , ==  value 
// === ,!== value and type


console.log(typeof 10)
console.log(typeof '10')


console.log(7 === '7') // False
console.log(7 === 7) // True
console.log(7 != 7)  // False
console.log(7 == '7') // True
console.log(7 == '7') // True
console.log(7 !== 7) // False
console.log(7 > 6) // True
console.log(7 < 6) // False
console.log(7 != 6) // True
console.log(7 == 6) // False
console.log(7 >= 6) // True
console.log(7 <= 6) // False
console.log(7 >= 7) // True
console.log(7 <= 7) // True


// Logical operator 

// AND  --  &&

// true   &&    true    ======> true
// false  &&    true    ======> false
// true   &&    false   ======> false 
// false  &&    false   ======> false

console.log(6 == 6 && 7 == 7)
console.log(6 != 6 && 7 == 7)
console.log(6 == 6 && 7 != 7)
console.log(6 != 6 && 7 != 7)


// OR 
// true   ||    true    ======> true
// false  ||    true    ======> true
// true   ||    false   ======> true 
// false  ||    false   ======> false

console.log(7 == 7 || 7 !== '7')
console.log(7 != 7 || 7 !== '7')
console.log(7 == 7 || 7 === '7')
console.log(7 != 7 || 7 === '7')

// NOT
//!true ====> false
//!false ====> true 

console.log(! (7 == '7'))
console.log(! (7 === '7'))


// conditional statement


// input ------> multiple outcomes

// numT > 0  && numT <= 5     ===> 5 % discount
// numT > 5  && numT <= 10    ===> 10 % discount 
// numT > 10                  ===> 30 % discount   


// if(condition){
//     // statements
// }

let numT = 17

if(5 > 0 && 5 <= 5){
    console.log("5 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("10 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}































