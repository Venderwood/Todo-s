  import React, {useState} from 'react'; //Importa todo el motor de React. Importa específicamente el hook useState, que sirve para crear estados en un componente. O sea, si quieres que algo cambie en la pantalla (como un contador que sube cuando haces clic), necesitas useState.
  import './App.css';
  import TodoTable from './components/TodoTable';
  import NewTodoForm from './components/NewTodoForm';

  function App() {

    const [showAddTodoForm, setShowAddTodoForm] = useState(false); //showAddTodoForm	Es una variable que dice si el formulario para agregar tareas está visible (true) o oculto (false). setShowAddTodoForm	Es una función que usas para cambiar el valor de showAddTodoForm.
                                                                   //useState(false)	Dice que al inicio el formulario está oculto (porque empieza en false).
    const [todos, setTodos] = useState([ //const [todos, setTodos]	Crea dos cosas: una variable (todos) y una función (setTodos) que cambia esa variable. todos → es el valor actual de la lista de tareas. setTodos → es la única forma correcta de cambiar todos.
      {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
      {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two'},
      {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User one'},
      {rowNumber: 4, rowDescription: 'Charger phone battery', rowAssigned: 'User one'}
    ]
    )

    /*Se creo una matris para poder hacer más optimos las tareas pendientes, en este caso es el ejemplo (en la vida real no es así, pero si sirve para aprender el funcionamiento de estas)*/
    /*todos es un objeto */
    /*const todos = [
      {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
      {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two'},
      {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User one'},
      {rowNumber: 4, rowDescription: 'Charger phone battery', rowAssigned: 'User one'}
    ]*/

    //const addTodo = () => { //las funciones flechas Esta función, cuando se invoca, ejecuta el código dentro de sus llaves {}
    //  console.log('Our addTodo btn has been clicked!') //Dentro de la función, se llama a console.log para imprimir el mensaje en la consola del navegador.
    //}

    //La propiedad .length se utiliza para determinar la cantidad de elementos en un arreglo o la cantidad de caracteres en una cadena de texto.
    const addTodo = (description, assigned) => { //Crea una función y la guarda en la variable addTodo. Dice que la función espera dos datos: uno que será la descripción (describe) y otro que será el asignado (assigned).
      let rowNumber = 0; //Declara una variable que puede cambiar su valor después. rowNumber	Es el nombre de la variable. = 0	Le está asignando el valor inicial de 0.
      //const addTodo = () => {} Define una función flecha llamada addTodo y la asigna a una constante. Esta función se puede invocar más adelante para ejecutar el código dentro de ella.
      if (todos.length > 0) { //todos.length > 0	Pregunta: "¿ya hay tareas en la lista (todos)?" if (todos.length > 0) {} Verifica si el arreglo todos tiene al menos un elemento. Si no existe ningun elemento en todos el if se bloque ya que seria todos.length == 0
        rowNumber = todos[todos.length - 1].rowNumber + 1; //todos[todos.length - 1]	Toma la última tarea de la lista. .rowNumber + 1	Agarra su número de renglón y le suma 1 para crear el nuevo ese valor se lo dars a rowNumber
      }
      else{ //Si no hay tareas todavía, el primer rowNumber será 1.
        rowNumber = 1;
      }
        const newTodo = { //const newTodo = {Crea un nuevo objeto llamado newTodo con las siguientes propiedades:
          rowNumber: rowNumber, //como el if y el else ya se encargan de sumar el siguiente numero de la fila.
          //rowNumber: todos.length + 1, //rowNumber: Se establece como todos.length + 1, lo que asigna un número de fila secuencial basado en la cantidad actual de elementos en todos
          rowDescription: description, // Estás creando una propiedad llamada rowDescription en un objeto, y le estás asignando el valor de la variable description.
          rowAssigned: assigned //rowAssigned: Una cadena de texto 'User three' que indica a quién se asigna la tarea.
          //rowDescription: 'New Todo' //Esto es para dejar textos especificos, rowDescription: Una cadena de texto 'New Todo' que describe la tarea.
        };
        setTodos(todos => [...todos, newTodo]) //setTodos es la función que actualiza el estado (viene de un const [todos, setTodos] = useState([])). todos => [...todos, newTodo] es una función flecha que: Toma el estado anterior (todos).Crea un nuevo array ([...]). Copia todos los elementos anteriores con ...todos. Y al final mete newTodo.
        //todos.push(newTodo); //todos.push(newTodo);Agrega el objeto newTodo al final del arreglo todos. Nota: El método push() modifica el arreglo original y devuelve la nueva longitud del arreglo.
        //.log(todos); //Al ejecutar console.log(todos);, estás solicitando que se muestre el valor actual de la variable todos en la consola.
    }

    const deleteTodo = (deleteTodoRowNumber) => { //const deletTodo = (deletTodoRowNumber) => {}	Define una función que recibe un número de renglón de la tarea que quieres borrar.
      let filtered = todos.filter(function (value) { //todos.filter(...)	Filtra la lista de tareas para quitar la que tenga ese número de renglón. el todos. siginific todos los objetos de la matris que hicimos
                                                     //function (value)	Es una función anónima (sin nombre) que recibe un parámetro llamado value. value	Representa cada elemento del array (todos) mientras filter los recorre uno por uno.
        return value.rowNumber !== deleteTodoRowNumber; //return value.rowNumber !== deletTodoRowNumber	Mantiene todas las tareas excepto la que tiene el rowNumber igual al que quieres borrar.
      });
      setTodos(filtered); //setTodos(filtered)	Actualiza la lista de tareas (todos) con la nueva lista ya sin la tarea eliminada.
    }


    return (
      //mt-5 es margin top 5, para react las clases no se fija en el nombre de la clase.Es una caja general que da espacio arriba (mt-5) y centra (container)
      <div className='mt-5 container'> {/*Es una etiqueta contenedora genérica en HTML. Sirve para agrupar otros elementos HTML y aplicarles estilos o lógica juntos. Es como una caja invisible que podés usar para organizar tu página en secciones.*/}
        {/* Hace que el contenido se vea como una "tarjeta" (border, sombra, padding) */}
        <div className='card'>
          {/* Parte superior de la tarjeta, estilo de encabezado */}
          <div className='card-header'>  { /* Your Todo's=tus tareas pendientes, este div contiene la parte superior de la pagina (ojo no es un th encabezado*/ }
            Your Todo's 
          </div>
          {/* Cuerpo del contenido, donde van los datos, inputs, listas, etc. */}
          <div className='card-body'> {/* Este div contiene a todas nuiestras tables al equivalente actual de todo nuestro programa*/}

            <TodoTable todos={todos} deleteTodo={deleteTodo} /> {/*todos={todos}	Le pasa la lista de tareas (todos) como propiedad (prop) al TodoTable. deleteTodo={deleteTodo}	Le pasa la función para borrar tareas (deleteTodo) como otra propiedad (prop).*/}
            <button className='btn btn-primary' onClick={() => setShowAddTodoForm(!showAddTodoForm)} > {/*onClick={...}	Le dice a React: "cuando hagas clic, ejecuta esta función". ()=> setShowAddTodoForm(...)	Es una función anónima que se ejecuta cuando das clic. !showAddTodoForm	El ! invierte el valor actual. Si era true, pasa a false. Si era false, pasa a true. setShowAddTodoForm(...)	Cambia el valor de showAddTodoForm al opuesto. */}
                                                                                                      {/*onClick={addTodo} <button>: Crea un botón en la interfaz de usuario. onClick={addTodo}: Asigna una función llamada addTodo que se ejecutará cuando el usuario haga clic en el botón. Este es un manejador de eventos en React. */}
              {showAddTodoForm ? 'Close New Todo' : 'New Todo'} {/*Esto es un operador ternario (condición ? valorSiTrue : valorSiFalse) que elige qué texto mostrar según el valor de showAddTodoForm. */}
              {/*New Todos {/*El texto entre las etiquetas <button> es lo que se muestra en el botón. En este caso, dice "Add new todo".*/}
            </button>
          {showAddTodoForm && //{}	Son llaves de React, para poner código JavaScript dentro del HTML/JSX. showAddTodoForm && (...)	Es un truco de JavaScript: "Si showAddTodoForm es true, entonces muestra lo que está después del &&".
            <NewTodoForm addTodo={addTodo}/> //{/* Estás usando el componente NewTodoForm y le estás pasando una propiedad (prop) llamada addTodo. Muestra el componente NewTodoForm en pantalla. Le pasa una prop llamada addTodo, que probablemente es una función que tú definiste en el componente papá. */}
          }

          {/*/*Lo que hace table en el className es espaciado bonito entre filas/columnas y table-hoverhace que cuando pasás el mouse sobre una fila, esa fila se resalte con un color de fondo (hover effect) /}
          <table className='table table-hover'> {/* Tabla/}
            <thead>  {/*Cabeza (es la cabeza de la tabla)/}
              <tr> {/*Fila de tabla para este encabezado Sirve para organizar los datos en filas dentro de una tabla (<table>).Va dentro de una tabla y contiene celdas que pueden ser:<th> (encabezado de columna o <td> (celda normal de datos)/}
                <th scope='col'>#</th> {/*alcance de columna/}
                <th scope='col'>Description</th> {/*descripsion/}
                <th scope='col'>Assigned</th> {/*que se asigne cada una de estas convocaciones de columnas/}
              </tr>
            </thead>
            <tbody> {/*Cuerpo de tabla*/}
              
             {/*<TodoRowItem/>{/*Gracias a usar valores constantes podemos reutilizar el compontente TodoRowItem */}
              {/*
              <tr>
                <th scope='row'>1</th> {/*alcance de fila con el numero 1(row es fila/}
                <td>Feed dog</td> {/*<td> es una tabla de datos, es una celda de datos de una tabla Se usa dentro de una fila (<tr>) para mostrar contenido normal, como texto, números, imágenes, etc./}
                <td>Erick</td>
              </tr>*/}

              {/*
              <tr>
                <th scope='row'>2</th>
                <td>Get haircut</td>
                <td>Erick</td>
              </tr>
              /}
            </tbody>
          </table>*/}
          </div>
        </div>
      </div>
    );
  }

  export default App;

