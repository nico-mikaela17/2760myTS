export const functionExample = () => {
    return {
        title: `Function As Type`,
        explanation: `The Type System represents the different types of values supported by the language. The Type System checks the validity of the supplied values, before they are stored or manipulated by the program. This ensures that the code behaves as expected. The Type System further allows for richer code hinting and automated documentation too.`,
        code: 
        `<pre data-prefix="1"><code>let add: (a: number, b: number) => number =</code></pre>
        <pre data-prefix="2"><code> function (x: number, y: number) {</code></pre>
        <pre data-prefix="3"><code>  return x + y;</code></pre>
        <pre data-prefix="4"><code>};</code></pre>`,
       
    }
}
export const functionParamsExample = () => {
    return {
        title: `Parameter Types`,
        explanation: `The TypeScript Parameters Type is used to take the parameters or arguments of a function, and create a new type based on them. It is quite useful when we know that the input of a Function conforms to a certain type, and we want to replicate that.`,
        code: `<pre data-prefix="1"><code>const myFunction = (a: string, b: string) => {</code></pre>
        <pre data-prefix="2"><code>  return a + b;</code></pre>
        <pre data-prefix="3"><code>}</code></pre>
        <pre data-prefix="4"><code> </code></pre>
        <pre data-prefix="5"><code>type aType = Parameters<typeof myFunction>[0]</code></pre>
        <pre data-prefix="6"><code>type bType = Parameters<typeof myFunction>[1]</code></pre>
        <pre data-prefix="7"><code> </code></pre>
        <pre data-prefix="8"><code>let a:aType = 'hello '</code></pre>
        <pre data-prefix="9"><code>let b:bType = 'world'</code></pre>
        <pre data-prefix="10"><code> </code></pre>
        <pre data-prefix="11"><code>myFunction(a, b)</code></pre>`,
    }
}

export const objectTypeExample = () => {
    return {
        title: `Objects`,
        explanation: `An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects.`,
        code: `<pre data-prefix="1"><code>var person = {</code></pre>
        <pre data-prefix="2"><code>  firstName:"Tom",</code></pre>
        <pre data-prefix="3"><code>  lastName:"Hanks",</code></pre>
        <pre data-prefix="4"><code>  sayHello:function() {  }  //Type template </code></pre>
        <pre data-prefix="5"><code>}</code></pre>
        <pre data-prefix="6"><code>person.sayHello = function() {  </code></pre>
        <pre data-prefix="7"><code>  console.log("hello "+person.firstName)</code></pre>
        <pre data-prefix="8"><code>}</code></pre>
        <pre data-prefix="9"><code>person.sayHello()</code></pre>`,
    }
}

export const arrayTupleEnumExample = () => {
    return {
        title: `Arrays`,
        explanation: `An array declaration without the data type is deemed to be of the type any. The type of such an array is inferred from the data type of the array’s first element during initialization.`,
        code: 
        `<pre data-prefix="1"><code>var alphas:string[]; </code></pre>
        <pre data-prefix="2"><code>alphas = ["1","2","3","4"] </code></pre>
        <pre data-prefix="3"><code>console.log(alphas[0]); </code></pre>
        <pre data-prefix="4"><code>console.log(alphas[1]);</code></pre>`,
        title2: `Tuple`,
        explanation2: `A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions. Tuple types are useful in heavily convention-based APIs, where each element’s meaning is “obvious”. This gives us flexibility in whatever we want to name our variables when we destructure them. In the above example, we were able to name elements 0 and 1 to whatever we wanted.`,
        code2: `<pre data-prefix="1"><code>type StringNumberPair = [string, number];</code></pre>`
    }
}

export const unionExample = () => {
    return {
        title: `Union Type`,
        explanation: `Union types are a powerful way to express a value that can be one of the several types. Two or more data types are combined using the pipe symbol (|) to denote a Union Type. In other words, a union type is written as a sequence of types separated by vertical bars.`,
        code: 
        `<pre data-prefix="1"><code>var val;{</code></pre>
        <pre data-prefix="2"><code>val = 12;</code></pre>
        <pre data-prefix="3"><code>console.log("numeric value of val " + val);</code></pre>
        <pre data-prefix="4"><code>val = "This is a string";</code></pre>
        <pre data-prefix="5"><code>console.log("string value of val " + val);{</code></pre>`
    }
}

