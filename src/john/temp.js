const arr = [
    {
        blah: 'item1'
    },
    {
        blah: 'item2'
    },
    {
        blah: 'item3'
    },
]

const callback = (x) => {
    return x.blah + ' is great'
}

const result = arr.map(callback)

console.log(result)
