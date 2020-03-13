let n = 10
const subtract = () => {
    if (n !== 0) {
        n = n - 1;
        console.log(n)
    }
}

const subtract2 = () => {
    if (n !== 0) {
        n = n - 1;
        console.log(n)
    }
}

for (let i = 0; i < 10; i++) {
    console.log('round ' + i)
    subtract()
}
