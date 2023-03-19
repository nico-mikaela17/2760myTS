import"./input-5c7e2d0b.js";const p=()=>({title:"Function As Type",explanation:"The Type System represents the different types of values supported by the language. The Type System checks the validity of the supplied values, before they are stored or manipulated by the program. This ensures that the code behaves as expected. The Type System further allows for richer code hinting and automated documentation too.",code:`<pre data-prefix="1"><code>let add: (a: number, b: number) => number =</code></pre>
        <pre data-prefix="2"><code> function (x: number, y: number) {</code></pre>
        <pre data-prefix="3"><code>  return x + y;</code></pre>
        <pre data-prefix="4"><code>};</code></pre>`}),d=()=>({title:"Parameter Types",explanation:"The TypeScript Parameters Type is used to take the parameters or arguments of a function, and create a new type based on them. It is quite useful when we know that the input of a Function conforms to a certain type, and we want to replicate that.",code:`<pre data-prefix="1"><code>const myFunction = (a: string, b: string) => {</code></pre>
        <pre data-prefix="2"><code>  return a + b;</code></pre>
        <pre data-prefix="3"><code>}</code></pre>
        <pre data-prefix="4"><code> </code></pre>
        <pre data-prefix="5"><code>type aType = Parameters<typeof myFunction>[0]</code></pre>
        <pre data-prefix="6"><code>type bType = Parameters<typeof myFunction>[1]</code></pre>
        <pre data-prefix="7"><code> </code></pre>
        <pre data-prefix="8"><code>let a:aType = 'hello '</code></pre>
        <pre data-prefix="9"><code>let b:bType = 'world'</code></pre>
        <pre data-prefix="10"><code> </code></pre>
        <pre data-prefix="11"><code>myFunction(a, b)</code></pre>`}),s=()=>({title:"Objects",explanation:"An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects.",code:`<pre data-prefix="1"><code>var person = {</code></pre>
        <pre data-prefix="2"><code>  firstName:"Tom",</code></pre>
        <pre data-prefix="3"><code>  lastName:"Hanks",</code></pre>
        <pre data-prefix="4"><code>  sayHello:function() {  }  //Type template </code></pre>
        <pre data-prefix="5"><code>}</code></pre>
        <pre data-prefix="6"><code>person.sayHello = function() {  </code></pre>
        <pre data-prefix="7"><code>  console.log("hello "+person.firstName)</code></pre>
        <pre data-prefix="8"><code>}</code></pre>
        <pre data-prefix="9"><code>person.sayHello()</code></pre>`}),i=()=>({title:"Arrays",explanation:"An array declaration without the data type is deemed to be of the type any. The type of such an array is inferred from the data type of the array’s first element during initialization.",code:`<pre data-prefix="1"><code>var alphas:string[]; </code></pre>
        <pre data-prefix="2"><code>alphas = ["1","2","3","4"] </code></pre>
        <pre data-prefix="3"><code>console.log(alphas[0]); </code></pre>
        <pre data-prefix="4"><code>console.log(alphas[1]);</code></pre>`}),l=()=>({title:"Union Type",explanation:"Union types are a powerful way to express a value that can be one of the several types. Two or more data types are combined using the pipe symbol (|) to denote a Union Type. In other words, a union type is written as a sequence of types separated by vertical bars.",code:`<pre data-prefix="1"><code>var val;{</code></pre>
        <pre data-prefix="2"><code>val = 12;</code></pre>
        <pre data-prefix="3"><code>console.log("numeric value of val " + val);</code></pre>
        <pre data-prefix="4"><code>val = "This is a string";</code></pre>
        <pre data-prefix="5"><code>console.log("string value of val " + val);{</code></pre>`});console.log("This is my Basic Types practice page");function u(e,o){return e+o}const f=25,y=3.5;let m=u(f,y);console.log(m);const h={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"],role:0};console.log("My car is one of these",h);function c(e,o){let t;return typeof e=="number"&&typeof o=="number"?t=e+o:t=e.toString()+o.toString(),t}console.log(c(25,3.5));console.log(c("25","3.5"));function n(e,o,t){let r;return typeof e=="number"&&typeof o=="number"||t==="as-number"?r=+e+ +o:r=e.toString()+o.toString(),r}console.log(n(25,3.5,"as-number"));console.log(n("25","3.5","as-number"));console.log(n("25","3.5","as-text"));const b=document.querySelector("#funcParams"),x=document.querySelector("#objectTypes"),T=document.querySelector("#arrayTypes"),g=document.querySelector("#unionTypes"),v=document.querySelector("#funcAsType"),w=document.querySelector(".card-title"),S=document.querySelector("#card-content"),E=document.querySelector("#code-content");v.addEventListener("click",a.bind(globalThis,p));b.addEventListener("click",a.bind(globalThis,d));x.addEventListener("click",a.bind(globalThis,s));T.addEventListener("click",a.bind(globalThis,i));g.addEventListener("click",a.bind(globalThis,l));function a(e){const{title:o,explanation:t,code:r}=e();w.textContent=o,S.textContent=t,E.innerHTML=r}
