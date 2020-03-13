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

var strs = [ 'hamburger', 'baked potato', 'tacos', 'condiment soup' ];
var list = document.createElement('food');
for (var i in strs) {
  var anchor = document.createElement(acceptableCondiments);
  anchor.href = "#";
  anchor.innerText = strs[i];

  var elem = document.createElement("list");
  elem.appendChild(anchor);
  list.appendChild(elem);
}

//document.getElementById("hamburger").textContent = 'new text';