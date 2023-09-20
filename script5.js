// loops
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

// for loop and while loop

// for(intialization ; conditionCheck ; increment/decrement){
//     //statements
// }


// program 1


for(let i = 1 ; i <= 100 ; i++) { // 2 // 3 // 4
    console.log(i) //1 //2 // 3
}

// 1 <= 3  ====> true
// 2 <= 3  ====> true
// 3 <= 3  ====> true

// program 2


for(let i  = 1 ; i <= 3 ; i++){  // 2 // 3 // 4
    console.log("hello") // "hello" , "hello" , "hello"
}

// program 5

for(let i = 1 ; i <= 5 ; i++){ //2 // 3 // 4 // 5 // 6
    console.log(i) // 1 // 2 // 3 // 4 // 5
}

// program 6  -- 5 to 1

for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 // 4 // 3 // 2 // 1
}

// program 7 - table of 2
// 2,4,6,8,10,12,14,16,18,20
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // 6 // 8 ---- 22
    console.log(i) // 2 // 4 // 6 // 8 ------- 20
}

// program 8 
for(let i = 50 ; i >= 5 ; i = i - 5){ // 45 ----- 0
    console.log(i) // 50 ---------5
}

// break with for loop 

for(let i = 1 ; i <= 5 ; i++){  // 2  // 3
    if(i == 3){
        break
    }
    console.log(i)  // 1 // 2
}


for(let i = 1 ; i <= 5 ; i++){   // 2 // 3
    console.log(i)  // 1 // 2 // 3
    if(i == 3){
        break
    }
}



// continue with for loop




































