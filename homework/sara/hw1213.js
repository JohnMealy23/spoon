// const adjustableTrue = (probability) => {
// 	if (probability <= numz) {
//         return true;
//     } else {
//         return false
//     }
// }
// const numz = 100
// const result = adjustableTrue()
// console.log(result)

console.log('start')
const adjustableTrue = (probability) => {
    const numz = Math.random()
	if (probability <= numz) {
        return true;
    } else {
        return false
    }
}
const probability = 8
const result = adjustableTrue(probability)
console.log(result)


const addOne = (numz2) => {

}

console.log()