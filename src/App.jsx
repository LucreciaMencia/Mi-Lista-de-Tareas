import { useState } from "react";

import useLocalStorage from './hook/useLocalStorage'

import Logo from './assets/task.png'

import Formulario from './componentes/Formulario';
import EditarFormulario from './componentes/EditarFormulario';
import ListaDeTareas from './componentes/ListaTareas'


function App() {
  //defino los estados
  const [tareas, setTareas] = useLocalStorage('react-por-hacer.tareas', []);
  const [elementoEnfocadoPrevio, setElementoEnfocadoPrevio] = useState(null);
  const [tareaEditada, setTareaEditada] = useState(false);
  const [editando, setEditando] = useState(false);

  const agregarTarea = (tarea) => {
    setTareas(prevState => [...prevState, tarea])
  }

  const borrarTarea = (id) => {
    setTareas(prevState => prevState.filter(t => t.id !== id));
  }

  const alternarTarea = (id) => {
    setTareas(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const actualizarTarea = (tarea) => {
    setTareas(prevState => prevState.map(t => (
      t.id === tarea.id
        ? { ...t, nombre: tarea.nombre }
        : t
    )))
    cerrarEdicion();
  }

  const cerrarEdicion = () => {
    setEditando(false);
    elementoEnfocadoPrevio.focus();
  }

  const abrirEdicion = (tarea) => {
    setTareaEditada(tarea);
    setEditando(true);
    setElementoEnfocadoPrevio(document.activeElement);
  }

  return (
    <div className="container" >
      <header>
        <a href="https://www.flaticon.com/" target="_blank">
          <img src={Logo} className="logo" alt="logo" />
        </a>
        <h1>Mi Lista de Tareas</h1>
      </header>
      {
        editando && (
          <EditarFormulario
            tareaEditada={tareaEditada}
            actualizarTarea={actualizarTarea}
            cerrarEdicion={cerrarEdicion}
          />
        )
      }
      <Formulario agregarTarea={agregarTarea} />
      {tareas && (
        <ListaDeTareas
          tareas={tareas}
          borrarTarea={borrarTarea}
          alternarTarea={alternarTarea}
          abrirEdicion={abrirEdicion}
        />
      )}
    </div>
  )
}
export default App;