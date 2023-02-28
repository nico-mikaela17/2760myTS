/* empty css              */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const d=()=>({title:"Function As Type",explanation:"These types are syntactically similar to arrow functions. It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way. Let’s consider for a moment a function that returns the first element of an array. In TypeScript, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature.",code:`<pre data-prefix="1"><code>function firstElement<Type>(arr: Type[]): Type | undefined {</code></pre>
        <pre data-prefix="2"><code> return arr[0];</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`}),l=()=>({title:"Data types can be set on function parameters",explanation:"This is the syntax when indicating the data type of a function parameter.  After the parameter name, add a colon (:), a space, and then the data type you expect.  Be sure to use the primitive data types! (e.g. 'number' instead of 'Number')",code:`<pre data-prefix="1"><code>function add(num1: number, num2: number) {</code></pre>
            <pre data-prefix="2"><code>    return num1 + num2</code></pre>
        <pre data-prefix="3"><code>}</code></pre>`}),u=()=>({title:"Object data type with all properties set",explanation:"TypeScript can infer the data type of an object if all properties are set, but this example shows how to explicitly set the types of each property.",code:`<pre data-prefix="1"><code>enum Role {ADMIN, DEV, STUDENT}</code></pre>
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
        <pre data-prefix="21"><code>}</code></pre>`}),f=()=>({title:"Arrays",explanation:"To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we cover generics.",code:`<pre data-prefix="1"><code>let obj: any = { x: 0 };</code></pre>
        <pre data-prefix="2"><code>obj.foo();</code></pre>
        <pre data-prefix="3"><code>obj();</code></pre>
        <pre data-prefix="4"><code>obj.bar = 100;</code></pre>
        <pre data-prefix="5"><code>obj = "hello";</code></pre>
        <pre data-prefix="6"><code>const n: number = obj;</code></pre>`}),m=()=>({title:"Tuple",explanation:"A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions. Tuple types are useful in heavily convention-based APIs, where each element’s meaning is “obvious”. This gives us flexibility in whatever we want to name our variables when we destructure them. In the above example, we were able to name elements 0 and 1 to whatever we wanted.",code:'<pre data-prefix="1"><code>type StringNumberPair = [string, number];</code></pre>'}),y=()=>({title:"Union Type",explanation:`A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members. 
 A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.`,code:`<pre data-prefix="1"><code>function printId(id: number | string) {</code></pre>
        <pre data-prefix="2"><code> if (typeof id === "string") {</code></pre>
        <pre data-prefix="3"><code>  // In this branch, id is of type 'string'</code></pre>
        <pre data-prefix="4"><code>  console.log(id.toUpperCase());</code></pre>
        <pre data-prefix="5"><code> } else {</code></pre>
        <pre data-prefix="6"><code>  // Here, id is of type 'number'</code></pre>
        <pre data-prefix="7"><code>  console.log(id);</code></pre>
        <pre data-prefix="8"><code> }</code></pre>
        <pre data-prefix="9"><code>}</code></pre>`});console.log("This is my Basic Types practice page");function h(r,e){return r+e}const x=25,b=3.5;let g=h(x,b);console.log(g);const w={make:"McLaren",model:"720s",horsepower:720,style:"coupe",isFast:!0,colors:["red","blue","silver"],driver:[1,"McLaren"],role:0};console.log("My car is one of these",w);function s(r,e){let n;return typeof r=="number"&&typeof e=="number"?n=r+e:n=r.toString()+e.toString(),n}console.log(s(25,3.5));console.log(s("25","3.5"));function p(r,e,n){let a;return typeof r=="number"&&typeof e=="number"||n==="as-number"?a=+r+ +e:a=r.toString()+e.toString(),a}console.log(p(25,3.5,"as-number"));console.log(p("25","3.5","as-number"));console.log(p("25","3.5","as-text"));const T=document.querySelector("#funcParams"),v=document.querySelector("#objectTypes"),E=document.querySelector("#arrayTypes"),S=document.querySelector("#unionTypes"),L=document.querySelector("#funcAsType"),A=document.querySelector(".card-title"),j=document.querySelector("#card-content"),k=document.querySelector("#code-content");T.addEventListener("click",c.bind(globalThis,l));v.addEventListener("click",c.bind(globalThis,u));E.addEventListener("click",c.bind(globalThis,f,m));S.addEventListener("click",c.bind(globalThis,y));L.addEventListener("click",c.bind(globalThis,d));function c(r){const{title:e,explanation:n,code:a}=r();A.textContent=e,j.textContent=n,k.innerHTML=a}
