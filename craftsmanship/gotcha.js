// javascript strange gotchas

typeof null // object

Boolean([]) // true
console.log([] === false) // true

// 26.toString() -> invalid
const num = 26
num.toString() // '26'
typeof num // number
num instanceof Number // false

// hoisting
console.log(thisIsAVar) // no error
var thisIsAVar = 'value'

function makeArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push(function () {
      console.log(i)
    })
  }

  return arr
}
const arr = makeArray()
arr[0]() // 5
