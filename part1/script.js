
//Hola mundo
console.log('Hola mundo');

//Definir variables
let nombre = 'Rafael'; //Permitir que nombre guarde 'Rafael', las variables con let se pueden reasignar
const edad = 25; //Las variables con const no se pueden reasignar, si se intenta da error
var isDeveloper = true; // Antigua (no es recomendable), se pueden ver desde fuera de los scopes, cosa que let y const no pueden

//JavaScript es de tipado débil y dinámico
console.log(nombre);
nombre = 3;
console.log(nombre);

////////////////////////////////
/*
Tiene un total de 7 tipos primitivos (inmutables)
    Número
    String
    Booleano
    undefined
    null
    BigInt (menos importantes)
    Symbol (menos importantes)
*/

//Para ver un ejemplo
const lugar = 'Madrid';
lugar.toUpperCase()
console.log(lugar);
/*
Todos los métodos de String, como String es un tipo primitivo lo que hace es devolver un nuevo String, nunca podrás cambiar
el valor
*/

//Para que podamos poner en mayúsculas, necesitaríamos crear otro String
const lugarUpperCase = lugar.toUpperCase();
console.log(lugarUpperCase);

////////////////////////////////

/*
Un tipo mutable o no primitivo 
    Object
    Array
    etc
*/
// Aquí vemos como si es mutable. Aún así será preferible no mutar
const list = []
list.push(1); // push añade un elemento al final de la lista mutándose
console.log(list);

const list1 = []
anotherList = list1.concat(2); // push añade un elemento al final de la lista mutándose
console.log(anotherList);

////////////////////////////////
//Para objetos, se puede definir como pares clave y valor
const persona = {
    name: 'Rafael',
    age: 25,
    isDeveloper: true,
    links: ['http://google.com/es', 'http://twitter.com/es']
}
//¿Cómo se accede a las propiedades del objeto?
console.log(persona.name);
console.log(persona.links[0]);

//Si no sabemos el nombre de la propiedad, podemos acceder a la propiedad del objeto de la siguiente manera:
const field = 'age';
console.log(persona[field]);

//Cuidado no es lo mismo que esto, ya que buscara la propiedad field, y esta no existe en persona
console.log(persona['field']);

////////////////////////////////
//Para definir una función, podemos asignarla a una variable, es decir son como un objeto
//En este caso la función suma que recibe dos parámetros, a y b definidos dentro de los (). El código dentro de {}
const suma = (a, b) => { //Esto es una function expresión, a una constante se le asigna una función
    console.log(a);
    console.log(b);
    return a + b;
}

//Destaca la diferencia entre parámetros, a y b, y los argumentos (op1 y op2). No tienen porque coincidir
const op1 = 3
const op2 = 4

console.log(suma(op1, op1));

////////////////////////////////
//También podemos declarar una función, en este caso la función se puede llamar en lineas anteriores a la declaración
function restar(a, b) {
    console.log(a);
    console.log(b);
    return a - b;
}