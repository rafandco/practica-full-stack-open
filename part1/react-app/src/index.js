import React from "react";
import ReactDOM from "react-dom"; //react-dom es una librería que permite renderizar componentes HTML

//Componente App. Se declaran como una función pero en Mayúsculas
/*const App = () => ( 
  //En esta componente se usa JSX aunque parezca HTML,se puede transliterar en https://babeljs.io/
  <div>
    <p>Hello world</p> 
  </div>
)*/

//En la definición de la componente anterior se realiza de forma abreviada. La forma completa es:
/*
const App = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
*/

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

//Se evalúa el código JavaScript entre llaves y el resultado se incrusta en el lugar definido en el HTML
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}
//Vemos como renderizamos el componente App dentro de un div con id 'root' en index.html
ReactDOM.render(
  <App />, //Indicamos lo que queremos renderizar
  document.getElementById("root")
); //Indicamos donde lo queremos renderizar
