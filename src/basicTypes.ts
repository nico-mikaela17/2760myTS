export const functionParamsExample = () => {
    return {
        title: `Data types can be set on function parameters`,
        explanation: `This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')`,
        code: `<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`
    }
}

export const objectTypeExample = () => {
    return {
        title: `Object data type with all properties set`,
        explanation: `TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.`,
        code: `<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
        <pre data-prefix="2"><code></code></pre>
        <pre data-prefix="3"><code>const sportsCar: {</code></pre>
        <pre data-prefix="4"><code>  make: string</code></pre>
        <pre data-prefix="5"><code>  model: string</code></pre>
        <pre data-prefix="6"><code>  horsepower: number</code></pre>
        <pre data-prefix="7"><code>  style: string</code></pre>
        <pre data-prefix="8"><code>  isFast: boolean</code></pre>
        <pre data-prefix="9"><code>  colors: string[]</code></pre>
        <pre data-prefix="10"><code>  driver: [number, string]</code></pre>
        <pre data-prefix="11"><code>  role: Role</code></pre>
        <pre data-prefix="12"><code>} = {</code></pre>
        <pre data-prefix="13"><code>  make: 'McLaren',</code></pre>
        <pre data-prefix="14"><code>  model: '720s',</code></pre>
        <pre data-prefix="15"><code>  horsepower: 720,</code></pre>
        <pre data-prefix="16"><code>  style: 'coupe',</code></pre>
        <pre data-prefix="17"><code>  isFast: true,</code></pre>
        <pre data-prefix="18"><code>  colors: ['red', 'blue', 'silver'],</code></pre>
        <pre data-prefix="19"><code>  driver: [1, 'McLaren'],</code></pre>
        <pre data-prefix="20"><code>  role: Role.ADMIN,</code></pre>
        <pre data-prefix="21"><code>}</code></pre>`
    }
}

export const arrayExample = () => {
    return {
        title: `Arrays`,
        explanation: `To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we cover generics.`,
        code: 
        `<pre data-prefix="1"><code>let obj: any = { x: 0 };</code></pre>
        <pre data-prefix="2"><code>obj.foo();</code></pre>
        <pre data-prefix="3"><code>obj();</code></pre>
        <pre data-prefix="4"><code>obj.bar = 100;</code></pre>
        <pre data-prefix="5"><code>obj = "hello";</code></pre>
        <pre data-prefix="6"><code>const n: number = obj;</code></pre>`,
        

    }
}

export const tupleExample = () => {
    return {
        title: `Tuple`,
        explanation: `A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions. Tuple types are useful in heavily convention-based APIs, where each element’s meaning is “obvious”. This gives us flexibility in whatever we want to name our variables when we destructure them. In the above example, we were able to name elements 0 and 1 to whatever we wanted.`,
        code: 
        `<pre data-prefix="1"><code>type StringNumberPair = [string, number];</code></pre>`
        
    }
}
export const unionExample = () => {
    return {
        title: `Union Type`,
        explanation: `A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members. \n A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.`,
        code: 
        `<pre data-prefix="1"><code>function printId(id: number | string) {</code></pre>
        <pre data-prefix="2"><code> if (typeof id === "string") {</code></pre>
        <pre data-prefix="3"><code>  // In this branch, id is of type 'string'</code></pre>
        <pre data-prefix="4"><code>  console.log(id.toUpperCase());</code></pre>
        <pre data-prefix="5"><code> } else {</code></pre>
        <pre data-prefix="6"><code>  // Here, id is of type 'number'</code></pre>
        <pre data-prefix="7"><code>  console.log(id);</code></pre>
        <pre data-prefix="8"><code> }</code></pre>
        <pre data-prefix="9"><code>}</code></pre>`,
        

    }
}
export const functionExample = () => {
    return {
        title: `Function As Type`,
        explanation: `A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members. \n A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.`,
        code: 
        `<pre data-prefix="1"><code>function printId(id: number | string) {</code></pre>
        <pre data-prefix="2"><code> if (typeof id === "string") {</code></pre>
        <pre data-prefix="3"><code>  // In this branch, id is of type 'string'</code></pre>
        <pre data-prefix="4"><code>  console.log(id.toUpperCase());</code></pre>
        <pre data-prefix="5"><code> } else {</code></pre>
        <pre data-prefix="6"><code>  // Here, id is of type 'number'</code></pre>
        <pre data-prefix="7"><code>  console.log(id);</code></pre>
        <pre data-prefix="8"><code> }</code></pre>
        <pre data-prefix="9"><code>}</code></pre>`,
        

    }
}


console.log('This is my Basic Types practice page')

// A parameter is a named variable passed into a function
function add(num1: number, num2: number): number {
    return num1 + num2
}

const numberOne = 25
const numberTwo = 3.5

// an argument is a value (primitve or object) passed as input to a function.
let result = add(numberOne, numberTwo)
console.log(result)

enum Role {ADMIN, DEV, STUDENT}

const sportsCar: {
    make: string;
    model: string;
    horsepower: number;
    style: string;
    isFast: boolean;
    colors: string[];
    driver: [number, string];
    role: Role;
} = {
    make: "McLaren",
    model: '720s',
    horsepower: 720,
    style: 'coupe',
    isFast: true,
    colors: ['red', 'blue', 'silver'],
    driver: [1, 'McLaren'],
    role: Role.ADMIN,
}

console.log('My car is one of these', sportsCar)

// Example of typescript union types    

function combine(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine(25, 3.5))
console.log(combine('25', '3.5'))

// Example of typescript literal types

function combine2(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

console.log(combine2(25, 3.5, 'as-number'))
console.log(combine2('25', '3.5', 'as-number'))
console.log(combine2('25', '3.5', 'as-text'))

// Example of typescript function as type
//function loadExample(functionExample: () => { title: string, explanation: string, code: string })