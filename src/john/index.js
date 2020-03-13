import { model } from '../choose-yo-own/model.json'

const jokes = require('give-me-a-joke')
const callback = (joke) => {
    console.log(joke)
}
jokes.getRandomDadJoke(callback)
jokes.getCustomJoke('Mike', 'Fagerness', callback)


// const myCallback = () => {
//     const myLabel = document.createElement('div')
//     myLabel.style.background = 'red'
//     myLabel.innerText = "Hello Friends!"
//     document.body.appendChild(myLabel)
// }

// const button = document.createElement('button')
// button.innerText = 'Add More Friends!'
// button.addEventListener('click', myCallback)
// document.body.appendChild(button)


// const input = document.createElement('input')
// document.body.appendChild(input)

// button.addEventListener('click', () => {
//     alert(input.value)
// })
