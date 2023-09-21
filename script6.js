

// for(intialization ; conditionCheck ; increment/decrement){
//     // statements
// }

// program 1 print 1 to 3
for(let i = 0  ; i <= 3 ; i ++){ // 1 // 2 // 3 // 4
    console.log(i) // 0 // 1 // 2 // 3
}

// program 2  print hello 3 tyms 
for(let i = 1 ; i <= 3 ; i++){
    console.log("hello")
}

// program 3

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}

// program 4

for(let i = 5 ; i >= 1; i--){
    console.log(i)
}

// program 5 table of 2

for(let i = 2 ; i <= 20 ; i = i + 2){
    console.log(i)
}

// program 6 table of 5 in reverse
for(let i = 50 ; i >= 5 ; i = i - 5){
    console.log(i)
}

// for break


for(let i = 0 ; i <= 5 ; i++) { // 1 // 2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 0 // 1 // 2
}

for(let i = 5 ; i>= 1 ; i--) {  // 4 // 3
    console.log(i) // 5 // 4 // 3
    if(i == 3){
        break
    }
     
}

// continue
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i) // 1 // 2 // 4 // 5
}
// continue - 2

for(let i = 5 ; i >= 0 ; i--){ // 4 // 3 // 2 // 1 // 0 // -1
    if(i == 4){
        continue
    }
    console.log(i) // 5 // 3 // 2 // 1 // 0
}
















