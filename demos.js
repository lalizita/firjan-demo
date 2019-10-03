 //APIS
 alert("ola mundo")

 document.querySelector("body")

//Classes e Objetos

class Heroi {
  constructor(){
    this.poder = "fogo",
    this.forca = 0,
    this.planeta = "Terra"
  }
}

const alguem = new Heroi()
alguem.poder

// Objeto
const carro = {
  ano:2019,
  modelo: "corsa",
  placa: "xxx1111"
}

carro.ano
carro[ano]

//funçoes
function calcula(num){
  return 10 * num
}

const outroCalculo = function(num){
  return 2 + num
}

const quantoCalculoMDS = (num) => {
  return 1 + num
}

const elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

elements.map(function(element) { 
  return element.length; 
}); // esta sentença retorna o array: [8, 6, 7, 9]

// A função regular acima pode ser escrita como a arrow function abaixo
elements.map((element) => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando só existe um parâmetro, podemos remover os parênteses envolvendo os parâmetros:
elements.map(element => {
  return element.length;
}); // [8, 6, 7, 9]

// Quando a única sentença em uma arrow function é `return`, podemos remover `return` e remover
// as chaves envolvendo a sentença
elements.map(element => element.length); // [8, 6, 7, 9]

//EXEMPLO THIS
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
  }, 1000);
}

var p = new Person();


function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    that.age++;
  }, 1000);
}

function Person() {
  this.age = 0;

  setInterval(()=> {
    this.age = 2;
  }, 1000);
}

var p = new Person();


// PROMISES EXPLICAÇÃO
const retornaPromessa = param => {
  return new Promise((resolve, reject) => {
    if (typeof param !== 'number') {
      reject("Deu ruim")
    } else {
      if (param % 2 === 0) {
        setTimeout(() => {
          resolve("é par")
        }, 2000)
      } else {
        setTimeout(() => {
          resolve("impar")
        }, 1000)
      }
    }
  })
}

function job(data) {
  retornaPromessa(data)
    .then(resposta => console.log({ resposta }))
    .catch(erro => console.log({ erro }))
}

//Async await

const retornaPromessa = param => {
  return new Promise((resolve, reject) => {
    if (typeof param !== 'number') {
      reject("Deu ruim")
    } else {
      if (param % 2 === 0) {
        setTimeout(() => {
          resolve("é par")
        }, 2000)
      } else {
        setTimeout(() => {
          resolve("impar")
        }, 1000)
      }
    }
  })
}

async function job(data) {
  const res = await retornaPromessa(data)
	console.log(res)
}