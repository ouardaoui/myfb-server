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
console.log(person, user)

//obj as map 
// i can update key  but i cant create key so use Record for handle it 
var myObject: Record<string, number> = { 'a': 1, 'b': 2, 'c': 3 };
myObject["d"] = 4


//array type  

const myarr: Array<number> = [1, 2, 3, 4, 5, 6, 7]

const strArr: Array<string> = myarr.map((ele: number, index: number): string => {

  return `${ele}`
})
console.log(strArr)