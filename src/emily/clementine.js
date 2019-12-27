console.log("newborn clementine")

const adjustableTrue = (probability) => {
    const randomNumber = Math.random() * 100;
    console.log(randomNumber)
    if (randomNumber <= (100 - probability)) {
       return false
    }
    else {
       return true
    }
 }
 
 const percentTrue = 30
 const results = { trues: 0, falses: 0 }
 for (let i = 0; i < 100; i++) {
     const result = adjustableTrue(percentTrue)
     if (result === true) {
         results.trues++
     } else if (result === false) {
         results.falses++
     }
 }
 console.log({ results })