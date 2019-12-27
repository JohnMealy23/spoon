//
//const array1 = [
//    'Mike'
//    'Emily'
//    'Sara'
//]
//
//const makeHello = (x) => {
//    console.log('Hello ${x}!')
//}
//
//array1.forEach(makeHello)







//const declares getRandomBoolean always
//equals Math.random function
//equals 50%


const getRandomBoolean = (probability) => {
    const randomNumber = Math.random()
    const spoonCat = randomNumber >= probability;
    return spoonCat
}
const result1 = getRandomBoolean(.60)
const result2 = getRandomBoolean(.15)
console.log(result1, result2);

//passes function of getRandomBoolean

console.log(getRandomBoolean);



//const getRandomBoolean = () => {
//    const x = Math.random() >= 0.5;
//    return x
//}

//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())



//const getRandomBoolean = (thisnumber) => {
//    if (thisnumber % 2 === 0) {
//        return false;
//    } else {
//        return true;
//    }
//}
//const trueorfalse1 = getRandomBoolean(2)
//const trueorfalse2 = getRandomBoolean(2)
//const trueorfalse3 = getRandomBoolean(2)
//const trueorfalse4 = getRandomBoolean(2)
//console.log({
//trueorfalse1,
//trueorfalse2,
//trueorfalse3,
//trueorfalse4,
//})



const adjustableTrue = (probability) => {
        if (results < 30) {
        return false;
    } else {
        return true;
    }
}

console.log(probability)

// What follows is a unit test.  Don't touch anything below this line!
// It'll run your function 100 times, and you can check if the number of
// trues is as intended - around ~30% of the whole, in this case.
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