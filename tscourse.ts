import { CorsRequest } from "cors";

//define obj with interface
interface Person {
  name: string,
  age: number,
  isHuman: boolean
}

const person: Person = {
  name: "ahmed",
  age: 17,
  isHuman: false
}

//define obj with type 
type User = {
  first: string,
  last: string
}

const user: User = {
  first: "ahmed",
  last: "nazi"
}


//obj as map 
// i can update key  but i cant create key so use Record for handle it 
var myObject: Record<string, number> = { 'a': 1, 'b': 2, 'c': 3 };
myObject["d"] = 4


//array type  

const myarr: Array<number> = [1, 2, 3, 4, 5, 6, 7]

const strArr: Array<string> = myarr.map((ele: number, index: number): string => {

  return `${ele}`
})
//function in function 
//// let s try with single function 
function red(numbers: number[]): number {
  return numbers.reduce((acc: number, number: number) => {
    return acc + number
  })
}
console.log(red([1, 2, 3, 4, 5, 6, 7, 8, 9]))
////   arrow function 
const redArrow = (a: number, b: number): number => {
  return a + b
}
const funInFun = (numbers: number[], callback: (acc: number, num: number) => number): number => {
  return numbers.reduce(callback)
}

console.log(funInFun([1, 2, 3, 4, 5, 7, 9], (a, b) => a + b))

//function return function
type AdderFun = (num: number) => (val: number) => number
const adderFun: AdderFun = (num: number) => {
  return (val: number) => num + val
}
const addOne = adderFun(5)
console.log(addOne(1))

//Overloading  function 

// "x:10,y:20" || {x: 10,y:20} || x,y => {x : 10,y : 10}

interface Coor {
  x: number
  y: number
}

function parseToObj(args1: string): Coor;
function parseToObj(args1: Coor): Coor;
function parseToObj(args1: number, args2: number): Coor

function parseToObj(args1: unknown, args2?: unknown): Coor {
  let obj: Coor = {
    x: 0,
    y: 0
  }
  if (typeof args1 === "object") {
    obj = { ...(args1 as Coor) }
  } else if (typeof args1 === "number") {
    obj = {
      x: args1,
      y: args2 as number
    }
  } else {
    (args1 as string).split(",").forEach(str => {
      const [key, value] = str.split(":")
      obj[key as "x" | "y"] = parseInt(value)
    });
  }

  return obj
}
const myObj = parseToObj("x:10,y:70")
console.log(myObj)