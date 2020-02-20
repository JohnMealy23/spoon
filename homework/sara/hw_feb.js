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

//const callback = (stank) => {
//    return stank.food
//}

//const justTheFood = foodArray.map(callback)
//console.log(justTheFood)

const gork = (condiment) => {
    if (condiment === 'sour cream') {
        return true
    }
    else {
        return false
    }
}

const containsSourCream = (foodItem) => {
    const foodItemCondiments = foodItem.acceptableCondiments
    const hasSourCream = foodItemCondiments.some(gork)
    return hasSourCream
}

const weOnlyHaveSourCream = foodArray.filter(containsSourCream)
console.log(JSON.stringify(weOnlyHaveSourCream, null, 4))

