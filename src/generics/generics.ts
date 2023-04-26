import hljs from 'highlight.js'

const descriptionArea = document.querySelector('.description .text-xl') as HTMLParagraphElement
const codeSampleArea = document.querySelector('.code-sample .text-xl') as HTMLPreElement
const keyboard = document.querySelector('.keyboard') as HTMLDivElement

const genericSample1 = {
    title: 'Generic Functions',
    explanation: `This reverse function takes an array of any type (as indicated by <T>) and returns an array of the same type. It does not matter if we call this function with an array of strings or an array of numbers. The type of the array that is returned will be the same as the type of the array that is passed in.
    <br><br>
    So, the output from calling reverse on the array of fruits will an array of fruits but in reverse order. The output from calling reverse on the array of numbers will be an array of numbers but in reverse order.`,
    code: `<code>function reverse<T>(array: T[]): T[] {
    return array.reverse()
}
    
const stringArray = ['key lime', 'cherry', 'lemon']
const reversedStringArray = reverse&lt;string&gt;(stringArray)
console.log(reversedStringArray)
    
const numberArray = [1342, 2654, 345676]
const reversedNumberArray = reverse&lt;number&gt;(numberArray)
console.log(reversedNumberArray)</code>`
}

const genericSample2 = {
    title: 'Generic Constraints',
    explanation: `In TypeScript, generic constraints allow you to restrict the types that can be used as arguments to a generic function. This helps ensure that the function is only used with types that meet certain requirements.
    To define a generic constraint, you can use the extends keyword, followed by the type or interface that the generic type parameter must extend.
    <br><br>
    Generic constraints are useful when you want to ensure that a generic function can only be called with types that meet certain requirements, such as having specific properties or methods. This helps prevent runtime errors and improves the type safety of your code.`,
    code: `<code>interface Person {
        name: string;
        age: number;
      }
      
      function getPersonName<T extends Person>(person: T): string {
        return person.name;
      }</code>`
}

const genericSample3 = {
    title: 'Generic Type T',
    explanation: `This class takes a generic type T. We can create a new instance of this class and pass in a number or a string. The type of the value property will be set to whatever type we pass in.`,
    code: `<code>class DataStorage<T> {
        data: T
    
        constructor(data: T) {
            this.data = data
        }
    
        getData(): T {
            return this.data
        }
    }
    
    const textStorage = new DataStorage<string>('Hello World')
    console.log(textStorage.getData())
    
    const numberStorage = new DataStorage<number>(2034809230948)
    console.log(numberStorage.getData())</code>`
}

const genericButton1 = document.createElement('button')
genericButton1.classList.add('btn')
genericButton1.textContent = genericSample1.title

genericButton1.addEventListener('click', () => {
    descriptionArea.innerHTML = genericSample1.explanation
    codeSampleArea.innerHTML = genericSample1.code
    hljs.highlightAll()
})

const genericButton2 = document.createElement('button')
genericButton2.classList.add('btn')
genericButton2.textContent = genericSample2.title

genericButton2.addEventListener('click', () => {
    descriptionArea.innerHTML = genericSample2.explanation
    codeSampleArea.innerHTML = genericSample2.code
    hljs.highlightAll()
})

const genericButton3 = document.createElement('button')
genericButton3.classList.add('btn')
genericButton3.textContent = genericSample2.title

genericButton3.addEventListener('click', () => {
    descriptionArea.innerHTML = genericSample3.explanation
    codeSampleArea.innerHTML = genericSample3.code
    hljs.highlightAll()
})

// make two more of these buttons for the other two samples

document.addEventListener('DOMContentLoaded', () => {
    keyboard.appendChild(genericButton1)
    keyboard.appendChild(genericButton2)
    keyboard.appendChild(genericButton3)


    // append the other two buttons here
})

// Generic Sample 1.  This reverse function takes an array of any type (as indicated by <T>) and returns an array of the same type

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

const stringArray = ['key lime', 'cherry', 'lemon']
const reversedStringArray = reverse<string>(stringArray)
console.log(reversedStringArray)

const numberArray = [1342, 2654, 345676]
const reversedNumberArray = reverse<number>(numberArray)
console.log(reversedNumberArray)

// Generic Sample 2.  This class takes a generic type T. We can create a new instance of this class and pass in a number or a string. The type of the value property will be set to whatever type we pass in.

class DataStorage<T> {
    data: T

    constructor(data: T) {
        this.data = data
    }

    getData(): T {
        return this.data
    }
}

const textStorage = new DataStorage<string>('Hello World')
console.log(textStorage.getData())

const numberStorage = new DataStorage<number>(2034809230948)
console.log(numberStorage.getData())

// Generic Sample 3.  Generic Constraints. This example shows how to use generic constraints. First, we define an interface to indicate that whenever we define a generic type that uses the hasAge interface, we can expect it will have an age property.  If not, an exception will be thrown.

interface hasAge {
    age: number
}

function getTotalAge<T extends hasAge>(people: T[]): number {
    return people.reduce((total, person) => total + person.age, 0)
}

const people = [
    { name: 'John', age: 30 },
    { name: 'Sally', age: 25 },
    { name: 'Bob', age: 40 }
]

const totalAge = getTotalAge<hasAge>(people)
console.log(totalAge)