const funcParamsButton = document.querySelector('#funcParams')!
const codeExample = document.querySelector('#codeExample')!
const cardTitle = document.querySelector('.card-title')!
const cardContent = document.querySelector('#cardContent')!

funcParamsButton.addEventListener('click', showExample)

function showExample() {
    console.log('About to show example...')
  cardTitle.textContent = 'function add(num1: number, num2: number)'
  cardContent.innerHTML = `<p>some code goes here</p>`
}

console.log('This is my Basic Types practice page')

// A parameter is a named variable passed into a function
function add(num1: number, num2: number) {
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
    role: Role.ADMIN
}

console.log('My car is one of these', sportsCar)
const storageHTML = `<!DOCTYPE html>
<html lang="en" data-theme="night">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TypeScript Examples</title>
    
    
    
    <script type="module" crossorigin src="/assets/index-136a4018.js"></script>
    <link rel="stylesheet" href="/assets/index-e094958c.css">
  </head>
  <body>
    <header class="m-8 text-4xl border-4 p-4 outline outline-offset-2">Basic TypeScript Types Examples</header>
    <main class="flex h-screen">
      <nav class="w-72 bg-slate-100 mx-8">
        <ul>
          <li>
            <button id="funcParams" class="btn btn-primary">
              Function Parameter Types
            </button>
          </li>
        </ul>
      </nav>
      <div class="bg-slate-100 mx-8 w-screen">
        <div id="codeExample" class="card">
          <div class="card-body">
            <h2 class="card-title"></h2>
            <div id="cardContent">
 <!-- here is where the code example gets inserted -->               
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>&copy; Nicole Linnarz 2023</footer>
  </body>
</html>`