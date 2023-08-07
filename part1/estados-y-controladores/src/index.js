import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Hello = (props) => {
  //Esto es una función dentro de otra. Calcula el año de nacimiento según la edad
  const bornYear = () => {
    //Guarda en yearNow new Date().getFullYear(), es decir el año actual
    const yearNow = new Date().getFullYear()
    //No necesitaría pasar la edad ya que al estar dentro de la función tiene acceso a las props
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
