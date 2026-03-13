//RESUELVE LOS EJERCICIOS AQUI
/*
//map() --> Sirve para transformar cada elemento de un array en otro valor.
const numerosMap = [1, 2, 3];
const dobles = numerosMap.map(numero => numero * 2);
// [2, 4, 6]

//filter() --> Sirve para filtrar elementos y quedarte solo con los que cumplan una condición.
const numerosFilter = [1, 2, 3, 4];
const pares = numerosFilter.filter(numero => numero % 2 === 0);
// [2, 4]

//reduce() --> Sirve para reducir un array a un único valor: suma, producto, frase, objeto, etc.
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acc, numero) => acc + numero, 0);
// 10*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Map
/*1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función elevados que sea el 
resultado de elevar cada número a si mismo.*/
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
    return numbers.map(number => number ** number);
}

console.log(elevados());

/* 2.- Dado el array foodList con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo 
array que consiga generar de salida el resultado esperado.

[
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
] */
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const result2 = foodList.map(food => {
    if (food === 'Pizza') {
        return 'Como soy de Italia, amo comer Pizza';
    } else if (food === 'Ramen') {
        return 'Como soy de Japón, amo comer Ramen';
    } else if (food === 'Paella') {
        return 'Como soy de Valencia, amo comer Paella';
    } else {
        return 'Aunque no como carne, el Entrecot es sabroso';
    }
});

console.log(result2);

/*3.- Dado el array staff, crear un segundo array que forme frases como en el ejemplo accediendo a las 
propiedades del objeto proporcionado:

// Resultado esperado

  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
 */

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map(persona => {
    //return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
    //Forma más elegante
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(" y ")}`;

});

console.log(result3);

//Filter
/*4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(numero => numero % 2 !== 0);
//console.log(result4);

/*5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque 
una sentencia como la del ejemplo:

['Que rico Tempeh me voy a comer!',
'Que rica Tofu burguer me voy a comer!']

const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}]; 
*/
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

//const result5 = foodList2.filter(comida => {comida.isVeggie});//Esto comida => {comida.isVeggie === true}); hace lo mismo pero más largo
const result5 = foodList2.filter(comida => comida.isVeggie).map(nombre => `Que rico ${nombre.name} me voy a comer!`);
console.log(result5);

//En el caso que quiera mostrar dos mensajes distintos seria ya con un if
/*const result5cambiandoFrase = foodList2.filter(comida => comida.isVeggie).map(comida => {
    if (comida.name === 'Tofu burguer') {
        return `Que rica ${comida.name}`;
    }
    return `Que rico ${comida.name}`;
});*/

/*6.- Dado el array inventory, devolver un array con los nombres de los elementos que valgan más 
de 300 euros.

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];*/

/*
  [
    'TV Samsung',
    'Viaje a Cancún'
  ]
*/
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const result6 = inventory.filter(item => item.price > 300).map(nombre => nombre.name);
console.log(result6);

//Reduce
/*6.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los 
elementos del array*/
const numeros = [39, 2, 4, 25, 62];

/*acc = acumulador
numero = elemento actual
empezamos con 1 porque es el neutro de la multiplicación*/
const multiplicacion = numeros.reduce((acc, numero) => (acc * numero), 1);
console.log(multiplicacion);

/*7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  'Me',
  'llamo',
  //Tu nombre aqui!,
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
*/
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const sentenceElements = [
    'Me',
    'llamo',
    'TuNombre',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const frase = sentenceElements.reduce((acc, palabra) => `${acc} ${palabra}`);
console.log(frase);

/*8.- Obtener el monto "precio" total de los elementos que pertenecen a catergory "code" en el siguiente 
array.
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
// Resultado --> 60 */

const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const total = books.filter(libro => libro.category === 'code').reduce((acc, libro) => (acc + libro.price), 0);
console.log(total);

//Más avanzado:
const totalAvanzado = books.reduce((acc, libro) => {
    //Ternario
    return libro.category === 'code'//Es como un if, si la categoria del array libro es igual estricto a code devuelve true o false y haz:
        ? acc + libro.price// si es true -> acc + price en este caso
        : acc;//else solo me devuelves el acc 
}, 0);
