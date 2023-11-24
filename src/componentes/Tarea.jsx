import { useState } from "react";

import estilos from './Tarea.module.css'

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { PiPencilCircleThin } from "react-icons/pi";
import { CiTrash } from "react-icons/ci";

const Tarea = ({ tarea, borrarTarea, alternarTarea, abrirEdicion }) => {
    const [checkeado, setCheackeado] = useState(tarea.checked);

    const handleCheckboxChange = (e) => {
        setCheackeado(!checkeado);
        alternarTarea(tarea.id);
    }

    return (
        <li className={estilos.tarea}>
            <div className={estilos["grupo-tareas"]}>
                <input
                    type="checkbox"
                    className={estilos.checkbox}
                    checked={checkeado}
                    onChange={handleCheckboxChange}
                    name={tarea.nombre}
                    id={tarea.id} />
                <label
                    htmlFor={tarea.id}
                    className={estilos.label}
                >
                    {tarea.nombre}
                    <p className={estilos.checkmark}>
                        <IoIosCheckmarkCircleOutline strokeWidth={2} width={24} height={24} />
                    </p>
                </label>
            </div>
            <div className={estilos["grupo-tareas"]}>
                <button
                    className="btn"
                    aria-label={`Actualizar ${tarea.nombre} Tarea`}
                    onClick={() => abrirEdicion(tarea)}
                >
                    <PiPencilCircleThin width={24} height={24} />
                </button>
                <button
                    className={`btn ${estilos.borrar}`}
                    aria-label={`Borrar ${tarea.nombre} Tarea`}
                    onClick={() => borrarTarea(tarea.id)}
                >
                    <CiTrash width={24} height={24} />
                </button>
            </div>
        </li>
    )
}
export default Tarea