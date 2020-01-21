console.log("toddler clementine")

alert('hello there')

const adjustableTrue = (probability) => {
    const randomNumber = Math.random() * 100;
    console.log(randomNumber)
    if (randomNumber <= probability) {
        return true
    }
    else {
        return false
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

const myLabel = document.

myLabel.innerText = "Hello Friends!"


const myCallback = () => {
    document.body.appendChild(myLabel)
}

setInterval(myCallback, 2000)
