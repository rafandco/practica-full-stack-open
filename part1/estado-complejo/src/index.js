import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";


const History = (props) => {
  //Este componente renderiza de manera condicional, una pista en caso de que no se haya pulsado ningún botón
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  //En caso de que la longitud de allClicks sea mayor que 0, muestra el historial
  return <div>button press history: {props.allClicks.join(", ")}</div>;
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);

const App = () => {
  /*
  Ahora tenemos dos estados, uno para left y otro para right, se recomienda separar los estados (atomización)
  (Recuerda que abría que cambiar las ejecuciones del onclick)
  */
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  /*Sin embargo vamos a comprobar que ocurriría si tuviéramos un solo estado que almacenara un objeto
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  

  const handleLeftClick = () => {
    //Es mejor crear el objeto que machacará al anterior, (newClicksState), en una constante a parte y pasarla como parámetro a setClicks
    const newClickState = {
      
      //Para no crear un objeto en el que se machaquen propiedades que no se cambian, usaremos la sintaxis del objete spread, esto nos 
      //permite solo machacar las propiedades que cambian

      //En este caso, (...clicks), crea un objeto que contiene el resto de propiedades que no se cambian
      
      ...clicks,
      //Está prohibido hacer clicks.left++, ya que estaríamos mutando el state directamente
      left: clicks.left + 1,
    };
    return setClicks(newClickState);
  };

  const handleRightClick = () => {
    const newClickState = {
      ...clicks,
      right: clicks.right + 1,
    };
    return setClicks(newClickState);
  };
*/

  //Volvemos a usar la forma recomendada para usar los estados, es decir la atomizada, no la formada por el objeto
  const [allClicks, setAll] = useState([]);
  const handleLeftClick = () => {
    setLeft(left + 1);
    //Usamos .concat en vez de .push, ya que concat no muta a diferencia de push que si muta el array
    setAll(allClicks.concat("L"));
  };
  const handleRightClick = () => {
    setRight(right + 1);
    setAll(allClicks.concat("R"));
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />{" "}
      <Button onClick={handleRightClick} text="right" />
      {right}
      {/* El método join() une todos los elementos de un array, en una cadena separando los elementos, con los caracteres pasados como parámetros
          en este caso ", "
          <p>{allClicks.join(", ")}</p>
      */}
      {/*History gestiona el renderizado condicional del historial*/}
      <History allClicks={allClicks} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
