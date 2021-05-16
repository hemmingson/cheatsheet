/* let code speak for itself 🤓 */

// magic number
const DAYS_IN_A_WEEK = 7

for (let i = 0; i < DAYS_IN_A_WEEK; i += 1) {}

// deep nesting
const arr = [[[0]]]

const getEle = (arr) => {
  if (Array.isArray(arr)) return getEle(arr[0])

  return arr
}

// stop echo, self-document

// avoid large function
const add = (a, b) => a + b

const multiply = (a, b) => a * b

// code repetition
const getUserInfo = (user) => {
  const { name, surname, password, email } = user
}

// variable naming
const camelCase = ''

// meaningful names
let getUserInfo

// favor descriptive over concise
let findUserById

// use shorter ver
let getUser

// use consistent verbs per concept

// function will usually create, read, update or delete something
let getUsers

// make booleans that read well in if-then statement
let car = {}
car.hasAirBag = true

// use nouns for class name
// use PascalCase for class name
class Car {}

// capitalize constant value
const SECONDS_IN_A_DAY = 86400

// avoid one-letter variable name
const today = () => new Date()

// object creation
const obj1 = {}
const obj2 = Object.create(null) // __proto__: undefined
const arr1 = []

// object method shorthand
const honor = {
  add() {},
}

// no call object prototype method directly
const has = Object.prototype.hasOwnProperty // cache
console.log(has.call(o, key))

// convert array-like to array
const arr2 = Array.from(o)

// mapping over iterables
const arr3 = Array.from(arr, cb)

// need return statement in array method callback
