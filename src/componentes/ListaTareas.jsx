import Tarea from './Tarea';

import estilos from './ListaTareas.module.css';

const ListaTareas = ({ tareas, borrarTarea, alternarTarea, abrirEdicion }) => {
    return(
        <ul className={estilos.tareas}>
            {tareas.sort((a,b) => b.id - a.id).map(tarea => (
                <Tarea
                key={tarea.id}
                tarea={tarea}
                borrarTarea={borrarTarea}
                alternarTarea={alternarTarea}
                abrirEdicion={abrirEdicion}
                />
            ))}
        </ul>
    )
}
export default ListaTareas