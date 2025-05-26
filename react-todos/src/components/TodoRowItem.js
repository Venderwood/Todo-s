function TodoRowItem(props){ //En React, props es la abreviatura de "propiedades". Son un mecanismo que permite a los componentes recibir datos desde sus componentes padres.

    return(
        <tr onClick={() => props.deleteTodo(props.rowNumber)}> {/*onClick={() => props.deleteTodo(props.rowNumber)}	Si haces clic en toda la fila, se llama a la función deleteTodo enviándole el número de esa tarea (rowNumber) para borrarla. */}
        <th scope='row'>{props.rowNumber}</th> {/*<th scope='row'>	Crea una celda de encabezado (header) para la fila. Se usa para marcar el número de tarea (rowNumber) como algo especial o importante. {props.rowNumber}	Muestra el número de la tarea (por ejemplo, 1, 2, 3...). */}
        <td>{props.rowDescription}</td> {/*<td>{props.rowDescription}</td>	Crea una celda normal donde se muestra el texto de la tarea (lo que hay que hacer). */}
        <td>{props.rowAssigned}</td> {/*<td>{props.rowAssigned}</td>	Crea otra celda normal donde muestra a quién está asignada la tarea. */}
        </tr>

    )
    
    
    //estos son costantes que no cambian con el tiempo, esto sirve para poder reutilizar componentes, pero estos no pueden ser modificados por la asignacion que se le dio (const)
    //const rowNumber = 1;
    //const rowDescription='Feed dog';
    //const rowAssigned='Erick';

    //return(
        //<tr>
        //{/*Para poder usar esyas constantes de valor se deben de poner entre corchetes para que se les pueda usar en este caso en el encabezado queda como {rowNumber} entre lso <th> */}
        //<th scope='row'>{rowNumber}</th>
        //<td>{rowDescription}</td>
        //<td>{rowAssigned}</td>
        //</tr>
        //)


//    return(
//        <tr>
//            <th scope='row'>1</th>
//            <td>Feed dogg</td>
//            <td>Erick</td>
//        </tr>
//    )
}

export default TodoRowItem //se utiliza para exportar un único valor principal desde un módulo. Este valor puede ser una función, clase, objeto o cualquier otro tipo de dato.