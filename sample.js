//probability homework

const adjustableTrue = (probability) => {
        if (const results < 30) {
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
