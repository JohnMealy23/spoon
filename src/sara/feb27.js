const state = ["gas", "New York", "of rest", "delirium"];

const ulElem = document.createElement("ul");
document.body.appendChild(ulElem);

const myInput = document.createElement("input")
document.body.appendChild(myInput);

const callback = (stateItem) => {
    const liElem = document.createElement("li");
    liElem.innerText = stateItem;
    ulElem.appendChild(liElem)
}

function say() {
    const userInput = myInput.value;
    ulElem.innerHTML = "";
    state.push(userInput);
    state.forEach(callback);
    return alert(userInput);
}
const lilButton = document.createElement("button");
lilButton.addEventListener("click", say);
document.body.appendChild(lilButton);
lilButton.innerHTML = "CLICK MEH"


// Make me an array called state.  
// Make me a text input on the page.
// Make me a ul on the page.
// Make me a button on the page.
// Every time the user clicks the button, the value of the input gets pushed into the state array.
// Every item in the state array becomes an li in the ul on the page.