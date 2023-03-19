import {functionExample, functionParamsExample, objectTypeExample, arrayTupleEnumExample, unionExample} from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!
const arrayTupleEnumButton = document.querySelector('#arrayTupleEnumTypes',)!
const unionButton = document.querySelector('#unionTypes',)!
const functionButton = document.querySelector('#funcAsType',)!


//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!
const cardTitle2 = document.querySelector('.card-title2')!
const cardContent2 = document.querySelector('#card-content2')!
const codeContent2 = document.querySelector('#code-content2')!

functionButton.addEventListener('click', loadExample.bind(this,functionExample))
funcParamsButton.addEventListener('click', loadExample.bind(this, functionParamsExample))
objectTypesButton.addEventListener('click', loadExample.bind(this, objectTypeExample))
arrayTupleEnumButton.addEventListener('click', loadExample.bind(this, arrayTupleEnumExample))
unionButton.addEventListener('click', loadExample.bind(this,unionExample))

// function showFuncParamsExample() {
//     const { title, explanation, code } = functionParamsExample()
//     cardTitle.textContent = title
//     cardContent.textContent = explanation
//     codeContent.innerHTML = code
// }

// function showObjTypesExample() {
//     const { title, explanation, code } = objectTypeExample()
//     cardTitle.textContent = title
//     cardContent.textContent = explanation
//     codeContent.innerHTML = code
// }

function loadExample(functionExample: () => { title: string, explanation: string, code: string, title2: string, explanation2: string, code2: string }) {
    const { title, explanation, code, title2, explanation2, code2} = functionExample()
    cardTitle.textContent = title
    cardContent.textContent = explanation
    codeContent.innerHTML = code
    cardTitle2.textContent = title2
    cardContent2.textContent = explanation2
    codeContent2.innerHTML = code2

}
