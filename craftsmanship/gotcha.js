// javascript strange gotchas

typeof null // object
typeof NaN // number

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

var foo = {
	bar: function () { return this.baz },
	baz: 1
}
// miss semicolon
(function () {
	return typeof arguments[0]()
})(foo.bar) // error! ({ bar:(function() { return this.baz; }), baz:1 }) is not a function

const async = 'async is not reserved', await = 'await is reserved'
console.log(async, await) // no error
async function insideAsync() {
	const await = 'await is reserved' // error
}

let count = 0
do {
	count++
} while(count < 1) // old school while loop
