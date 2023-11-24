import { useState, useEffect } from "react";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const EditarFormulario = ({ tareaEditada, actualizarTarea, cerrarEdicion }) => {
    const [nombreTareaActualizado, setNombreTareaActualizado] = useState(tareaEditada.nombre);

    useEffect(() => {
        const cerrarConEscape = (e) => {
            e.key === "Escape" && cerrarEdicion();
        }

        window.addEventListener('keydown', cerrarConEscape)

        return () => {
            window.removeEventListener('keydown', cerrarConEscape)
        }
    }, [cerrarEdicion])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const variable = { ...tareaEditada, nombre: nombreTareaActualizado }
        console.log(variable)
        actualizarTarea(variable)
    }

    return (
        <div
            role="dialog"
            aria-labelledby="editarTarea"
            onClick={(e) => { e.target === e.currentTarget && cerrarEdicion() }}
        >
            <form
                className="porHacer"
                onSubmit={handleFormSubmit}
            >
                <div className="envoltorio">
                    <input
                        type="text"
                        id="editarTarea"
                        className="input"
                        value={nombreTareaActualizado}
                        onInput={(e) => setNombreTareaActualizado(e.target.value)}
                        required
                        autoFocus
                        maxLength={60}
                        placeholder="Actualizar Tarea"
                    />
                    <label
                        htmlFor="editarTarea"
                        className="label"
                    >Actualizar Tarea</label>
                </div>
                <button
                    className="btn"
                    aria-label={`Confirmar tarea actualizada para leer ${nombreTareaActualizado}`}
                    type="submit"
                ><IoIosCheckmarkCircleOutline strokeWidth={2} height={24} width={24} />
                </button>
            </form>
        </div>
    )
}
export default EditarFormulario