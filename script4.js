

// numT > 0 && numT <= 5  ---- 10 % discount
// numT > 5 && numT <= 10 ---- 20 % discount 
// numT > 10              ---- 30 % discount

let numT = -18

// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }

// if(numT > 0 && numT <= 5){
//     console.log("5 % discount")
// }
// else if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// else if(numT > 10){
//     console.log("30 % discount")
// }
// else {
//     console.log("incorrect input")
// }

let marks = 56

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }


// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }
// else {
//     console.log("Fail try again")
// }

// program 3

// let a = 10 
// let b = 15

// if(a > b){
//     console.log("a is greater")
// }
// else {
//     console.log("b is greater")
// }

// program 4 

let x = 10 
let y = 80
let z = 500

// if(x > y && x > z){
//     console.log("x is greater")
// }
// else if(y > x && y > z){
//     console.log("y is greater")
// }
// else {
//     console.log("z is greater")
// }

// program  5

//let s = 8
// let t = 40

// if(s > t){
//     console.log("s is greater")
// }
// else {
//     console.log("t is greater")
// }

// //expression?statement if value is true:statement if value is false
// s > t ?console.log("s is greater"):console.log("t is greater")

// program 6

// let age = 17
// let q1 = age >= 18 ? "can drive":"cannot drive"
// console.log(q1)

// program 7


// switch statement without break
let city = "indore"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "indore":
        console.log("MP")
    case "lucknow":
        console.log("UP")
    default:
        console.log("incorrect city name")
}


// program 8 

let city2 = "indore"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "indore":
        console.log("MP")
        break
    case "lucknow":
        console.log("UP")
        break
    default:
        console.log("incorrect city name")
}

// program 9
let city3 = "kanpur"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "indore":
    case "bhopal":  
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "lucknow":
    case "kanpur":
        console.log("UP")
        break
    default:
        console.log("incorrect city name")
}



























