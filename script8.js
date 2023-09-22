let t1 = 1

while (t1 <= 5) {
    if (t1 == 3) {
        t1++ //4
        continue
    }
    console.log(t1) // 1  // 2 // 4 // 5
    t1++ // 2 // 3 // 5 // 6
}

let t2 = 5
while (t2 >= 1) {
    if (t1 == 3) {
        t1 -- // 2
        continue
    }
    console.log(t2) // 5 // 4 // 2 // 1
    t2-- // 4 // 3 // 1 // 0
}

// Array 

//             0          1        2        3
let names = ["chinmay","sarika","poorva","satish"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])

let q = names.length
console.log(q)


for(let i = 0 ; i <= 3 ; i++){ // 1 // 2 // 3 // 4
    //console.log(i) // 0 // 1 // 2 // 3
    console.log(names[i])
}


// i = 0
// i = 1
// i = 2
// i = 3

//               0       1       2        3       4
let fruits = ["apple","mango","banana","grapes","chikoo"]
let q2 = fruits.length
console.log(q2)

for(let i = 0 ; i < q2 ; i++){
    //console.log(i)
    console.log(fruits[i])
}

for(let i = 4 ; i >= 0 ; i--){
    console.log(i)
    console.log(fruits[i])
}

// while 

// printing all element of array

// printing all element array in reverse using while loop







