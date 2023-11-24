import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const Formulario = ({ agregarTarea }) => {
    const [tarea, setTarea] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        agregarTarea({
            nombre: tarea,
            checked: false,
            id: Date.now()
        })
        setTarea("")
    }

    return(
        <form
            className="porHacer"
            onSubmit={handleFormSubmit}
        >
        <div className="envoltorio">
            <input 
            type="text" 
            id="" 
            className="input"
            value={tarea}
            onInput={(e) => setTarea(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Ingresar Tarea"
            />
            <label
            htmlFor="tarea"
            className="label"
            >Ingresar Tarea</label>
        </div>
        <button
        className="btn"
        aria-label="Agregar Tarea"
        type="submit"
        ><IoAddCircleOutline /></button>
        </form>
    )
}
export default Formulario;