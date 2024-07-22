// Arrays


// let myArr = [1, 2, 3, 4, 5]

// console.log(myArr)

// console.log(myArr[4])
// console.log(myArr[0]) // to print the different elements of array we have to give different commands

// let newArr = [1, 2, 3, 4, 5]

 // newArr.push(7)
// newArr.pop()
// newArr.shift()
// newArr.unshift(3)

 // console.log(newArr)

 // let doubArr = [1, 4, 9, 16, 25]

 // const map1 = doubArr.map((x) => x * 2)

 // console.log(map1)

 // let evenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16]

 // const filter1 = evenArr.filter((x) => x % 2 === 0)

// console.log(filter1)


// let myNewArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumNum = 0
// const sumNumArr = myNewArr.reduce(
   // (accumulator, Currentvalue) => accumulator + Currentvalue, sumNum )

// console.log(sumNumArr)

// Array Iteration

let myArray = ["Nit", "Krish", "Veera"]
// console.log(myArray.length) //

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element)
}
let newMyArray = ["N", "I", "T"]
newMyArray.forEach(element => {
    // console.log(element)
});

const myArray2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // console.log(myArray2);
    //  console.log(myArray2[0][1])// 2 as output

    