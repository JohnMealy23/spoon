
const myCallback = () => {
    const myLabel = document.createElement('div')
    myLabel.style.background = 'red'
    myLabel.innerText = "Hello Friends!"
    document.body.appendChild(myLabel)
}

const button = document.createElement('button')
button.innerText = 'Add More Friends!'
button.addEventListener('click', myCallback)
document.body.appendChild(button)

