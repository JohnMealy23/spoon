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

const foodFilter = (foodItem) => {
    const hasSourCream = foodItem.acceptableCondiments.includes('sour cream')
    console.log('hasasdfsdfawSourCream', hasSourCream)
    return hasSourCream
}

const result = foodArray.filter(foodFilter)

console.log({ result })
