/*
setInterval(() => {
   const element = document.createElement('div')
   element.innerText = 'Hi Mike! '
   document.body.appendChild(element)
}, 5000)
*/

/*var myInput = document.createElement("Input");               // Create a <p> element
para.innerText = "This is my text";                      // Insert text
document.body.appendChild(Input);                      // Append <p> to <body>


/*
var myInput = document.createElement("input");

var myButton = document.createElement('BUTTON');
myButton.innerText = "Click on this"
*/


/*
   var x = document.createElement("INPUT");
   x.type = "number"
   x.value = "12345"
   document.body.appendChild(x);
myFunction()
*/
/*
var myInput = document.createElement('input');
myInput.type = "text"
myInput.value = "Hello World!"
document.body.appendChild(myInput)

var myButton = document.createElement('button');
myButton.innerText = 'Click Here!'
myButton.addEventListener('click', yellIt);
document.body.appendChild(myButton)

function yellIt() {
   const userInput = myInput.value
   alert(userInput)
}
*/

const foodArray = [
    {
        food: 'hamburger',
        acceptableCondiments: [
            'mayo',
            'mustard',
            'relish',
            'cheese',
        ],
    },
    {
        food: 'baked potato',
        acceptableCondiments: [
            'butter',
            'sour cream',
            'cheese',
            'chives',
        ],
    },
    {
        food: 'tacos',
        acceptableCondiments: [
            'salsa',
            'sour cream',
            'cheese',
            'gauc',
        ],
    },
    {
        food: 'condiment soup',
        acceptableCondiments: [
            'mayo',
            'mustard',
            'relish',
            'butter',
            'chives',
            'salsa',
            'sour cream',
            'cheese',
            'gauc',
        ],
    },
]

//const justTheFood = foodArray.map(menuItem => menuItem.food);
//console.log(justTheFood);

const foodFilter = (foodItem) => {
    const hasSourCream = foodItem.acceptableCondiments.includes('sour cream')
    console.log('hasSourCream', hasSourCream)
    return hasSourCream
}



/*
const condimentFind = (acceptableCondiment) => {
    return "sour cream"
}
const foodFilter = (menuItem) => {
    return menuItem.acceptableCondiments.includes("sour cream");
}
const weOnlyHaveSourCream = foodArray.filter(foodFilter);
console.log(weOnlyHaveSourCream);
*/