import { functionParamsExample, objectTypeExample, arrayExample, tupleExample, unionExample, functionExample} from "./basicTypes"

const funcParamsButton = document.querySelector('#funcParams')!
const objectTypesButton = document.querySelector('#objectTypes')!
const arrayTupleEnumButton = document.querySelector('#arrayTypes',)!
const unionButton = document.querySelector('#unionTypes',)!
const functionButton = document.querySelector('#funcAsType',)!


//const codeExample = document.querySelector('#code-example')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#card-content')!
const codeContent = document.querySelector('#code-content')!

funcParamsButton.addEventListener('click', loadExample.bind(this, functionParamsExample))
objectTypesButton.addEventListener('click', loadExample.bind(this, objectTypeExample))
arrayTupleEnumButton.addEventListener('click', loadExample.bind(this,arrayExample,tupleExample))
unionButton.addEventListener('click', loadExample.bind(this,unionExample))
functionButton.addEventListener('click', loadExample.bind(this,functionExample))

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

function loadExample(functionExample: () => { title: string, explanation: string, code: string }) {
    const { title, explanation, code } = functionExample()
    cardTitle.textContent = title
    cardContent.textContent = explanation
    codeContent.innerHTML = code
}
