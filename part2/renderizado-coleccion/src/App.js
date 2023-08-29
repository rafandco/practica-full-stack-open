import React from "react";
// Importamos de forma "default" el módulo Notes, ".js" se puede omitir
import Note from "./components/Note";

export const App = (props) => {
  const { notes } = props;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/*El método map necesita que los elementos posean un atributo id único, cuidado, no debe ser Math.random ni index.
           la key debe estar donde estas iterando los elementos, no sacar a la componente 
           
           Si pasamos el objeto note completo como parámetro a la componente, si bien funciona, no es lo ideal. Ya que estamos pasando
           más propiedades del objeto de las que usaremos y se pueden generar renderizados innecesarios.
           Mejor solo pasar las necesarias.
           
           */}
        {notes.map((note) => (
          <Note key={note.id} content={note.content} />
        ))}
      </ul>
    </div>
  );
};

