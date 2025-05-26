import TodoRowItem from "./TodoRowItem"

function TodoTable(props) {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
              {/*Este fragmento utiliza el método map() para iterar sobre el arreglo props.todos, que se espera sea una lista de tareas. Por cada elemento (todo) en ese arreglo, se renderiza un componente TodoRowItem, pasando ciertas propiedades (props) a cada uno. */}
                {props.todos.map(todo => ( //props.todos	Es un array (lista) de tareas que le pasaron como prop al componente. .map(todo => (...))	Hace un recorrido por cada tarea (todo) de la lista y crea un componente TodoRowItem para cada una.
                    <TodoRowItem //<TodoRowItem ... />	Es el componente que va a mostrar cada tarea. Se le pasan datos específicos (rowNumber, rowDescription, rowAssigned).
                        key={todo.rowNumber} //key={todo.rowNumber}	key es necesario en React para que identifique cada elemento de la lista (debe ser único).
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}

                {/*{/*Esta línea está renderizando un componente llamado TodoRowItem y le está pasando props (propiedades) que provienen del primer elemento del arreglo todos. 
                <TodoRowItem 
                rowNumber={props.todos[0].rowNumber} 
                rowDescription={props.todos[0].rowDescription} 
                rowAssigned={props.todos[0].rowAssigned}
                /> {/*Este es el primer componente de nuestra aplicacion que es exactamente lo que se encuentra abajo como texto solo como componente, en una sola linea de codio/}
                <TodoRowItem 
                rowNumber={props.todos[1].rowNumber}
                rowDescription={props.todos[1].rowDescription}
                rowAssigned={props.todos[1].rowAssigned}
                />
                <TodoRowItem 
                rowNumber={props.todos[2].rowNumber}
                rowDescription={props.todos[2].rowDescription}
                rowAssigned={props.todos[2].rowAssigned}
                />*/}
            </tbody>
        </table>
    )
}
export default TodoTable