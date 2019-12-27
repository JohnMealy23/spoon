//const getRandomBoolean = Math.random() >= 0.5;
//console.log(getRandomBoolean)

const getRandomBoolean = () => {
    const x = Math.random() >= 0.5;
    return x
}
const result = getRandomBoolean()
console.log(result)


const getRandomBoolean2 = () => {
    const random = Math.random()
    const probability = 0.5
    if (random >= probability) {
        return true
    }
    else {
        return false
    }
}
const result2 = getRandomBoolean2()
console.log(result2)