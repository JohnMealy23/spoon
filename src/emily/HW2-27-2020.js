// Make me an array called state.
const state = []

// Make me a text input on the page.
const textInput = document.createElement('INPUT');
textInput.type = 'text'
document.body.appendChild(textInput)

// Make me a ul on the page.
const hwUl = document.createElement('UL')
document.body.appendChild(hwUl)

// Make me a button on the page.
const hwButton = document.createElement('BUTTON')
hwButton.innerText = 'Button'
document.body.appendChild(hwButton)
// Every time the user clicks the button, the value of the input gets pushed into the state array.
hwButton.onclick = () => {
    //hollows out hwUl
    hwUl.innerHTML = ''
    // const textInput = textInput.value;
    state.push(textInput.value);
    state.forEach(callback);
}

// Sara's solution: 
// hwButton.addEventListener('click', say);
// document.body.appendChild(lilButton)
// hwButton.innerHTML = 'Click Me'

const callback = (stateItem) => {
    const indiLi = document.createElement('LI');
    indiLi.innerText = stateItem;
    hwUl.appendChild(indiLi)
}

// Every item in the state array becomes an li in the ul on the page.
const populateStateArray = () => {
    for (let i = 0; i < state.length; i++) {
        const newLI = document.createElement('li');
        const indState = state[i];

        const newContent = document.createTextNode(indState);

        newLI.appendChild(newContent);

        const displayState = document.getElementById('listState');

        displayState.appendChild(newLI)
    }
}
