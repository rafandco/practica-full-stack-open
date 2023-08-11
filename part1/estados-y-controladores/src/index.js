import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import para Hooks y estados
import { useState } from "react";

///////////////Funciones auxiliares del componente/////////////////
const Hello = (props) => {
  //Esto es una función dentro de otra. Calcula el año de nacimiento según la edad
  const bornYear = () => {
    //Guarda en yearNow new Date().getFullYear(), es decir el año actual
    const yearNow = new Date().getFullYear();
    //No necesitaría pasar la edad ya que al estar dentro de la función tiene acceso a las props
    return yearNow - props.age;
  };

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Hello2 = ({ name, age }) => {
  /*En este caso en vez de acceder a las props, las almacenaremos en dos constantes
  const name = props.name  
  const age = props.age
  
  Esto sería equivalente a 
  const {name, age} = props

  Que a su vez podría indicarse en los parámetros de la función ({name, age})
  */
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  //Desestructuración y funciones auxiliares
  const name = "Peter";
  const age = 10;
  /*
  Estados:
  useState(0) devuelve una matriz de dos elementos:
  - en el primer elemento, counter, muestra el valor actual del contador,
    el cual se inicializa a 0
  - el segundo elemento, setCounter se trata de un método que nos permite actualizar el estado
  */
  const [counter, setCounter] = useState(0); 
  /*
  Otra forma de declararlo sería:
  const counter = useState(0)
  const counterValue = useState[0]
  const setCounter = useState[1]
  */

  /*
  La función setTimeout() se usa para ejecutar una función en concreto, después  de un tiempo especificado en milisegundos
  La función setInterval() se usa para ejecutar una función en concreto, cada vez que pase un tiempo especificado en milisegundos
  La pregunta es, si se usa setTimeout, ¿cómo es que el contador se actualiza repetidas veces?
    - El contador se actualiza ya que cada vez que se llama a la función setCounter() se vuelve a renderizar la la componente
      Esto hace que se vuelva a ejecutar el cuerpo de la componente y se repita el proceso, pero incrementando el valor de counter
  */  
  setTimeout(
     () => setCounter(counter + 1), 
      1000
    );

  //También podemos comprobar que lo que se renderiza coincide con la salida esperada
  console.log("rendering...", counter);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello2 name={name} age={age} />
      <h1>Estados</h1>
      <p>{counter}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
