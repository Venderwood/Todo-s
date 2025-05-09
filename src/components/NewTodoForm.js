import React, {useState} from 'react';

function NewTodoForm (props) {

    const [assigned, setAssigned] = useState ('');//description Es la variable que guarda el valor actual (en este caso, un texto). setDescription Es la función que usas para cambiar el valor de description.useState('') Es un hook que dice: "Quiero un estado que empiece vacío ('')".
    const [description, setDescription] = useState (''); //description Es la variable que guarda el valor actual (en este caso, un texto). setDescription Es la función que usas para cambiar el valor de description.useState('') Es un hook que dice: "Quiero un estado que empiece vacío ('')".

    const submitTodo = () => { //Crea una función llamada submitTodo.
        if (assigned !=='' && description !=='') { //Revisa que assigned y description no estén vacíos.
            props.addTodo(description, assigned); //Si sí tienen contenido, llama a la función addTodo (que te pasaron como prop) y le manda description y assigned.
            setDescription('');//Vaciar la variable de estado description. O sea, le pone un string vacío ('') otra vez.
            setAssigned('');
        }
    }

    // const descriptionChange = (event) => { //Crea una función flecha llamada descriptionChange que recibe un event, event  Es el objeto del evento que pasa automáticamente cuando ocurre algo (por ejemplo, cuando escribes en un input o textarea).
    //     console.log('description', event.target.value); //Manda a la consola toda la información del evento para que puedas verla.
    //     setDescription(event.target.value);
    // }//si en  console.log solo dejamos event tenemos que estar en nuestra consola meternos al evento que se ve modificado entrar en target (objetivo) y luego a value (valur) nos evitamos todo eso si ponemos event,target.value

    // const assignedChange = (event) => {
    //     console.log('assigned', event.target.value);
    //     setAssigned(event.target.value);
    // }

    return(
        <div className='mt-5'>
            <form> {/*formulario */}
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label> {/*Label: texto que dice "Assigned"*/}
                    <input 
                        type='text' 
                        className='form-control' 
                        required
                        onChange={e => setAssigned(e.target.value)}//onChange es un evento en React (y en HTML) que detecta cuando algo cambia en un elemento, como un: <input> <textarea> <select>
                        //onChange={assignedChange} es lo mismo pero que tenemos arriba pero sin usar las constantes assignedChange, si usamos la formula e no veremos impreso en la consola al inspeccionar
                        value={assigned}
                    ></input> {/*Input: cajita de texto donde el usuario escribe. required: obliga a que el campo no esté vacío para poder enviar el form. */}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                        className='form-control' 
                        rows={3} 
                        required
                        onChange={e => setDescription(e.target.value)} //Es una función flecha que: toma el evento (e), agarra el texto (e.target.value), y actualiza el estado description usando setDescription. El usuario escribe "Hola" → el onChange se activa. El e.target.value tiene "Hola". setDescription('Hola') actualiza el estado. El textarea muestra siempre lo que esté en description.
                        value={description} //significa que el valor que se muestra en el input (o textarea, select, etc.) está conectado a la variable description.
                    ></textarea> {/*Se usa un <textarea> (más grande que el input) para escribir varias líneas. rows={3} significa que tendrá 3 filas de altura. Tambien es requerido*/}
                </div>
                <button 
                    type='button' //type='button' = Es solo un botón normal (no envía automáticamente el formulario).
                    className='btn btn-primary mt-3' 
                    onClick={submitTodo}
                >
                    Add Todo
                </button> 
            </form>
        </div>
    )
}

export default NewTodoForm