import { useState } from "react"


const Formulario = () => {
  
  
    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false
    })
    
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(todo)
    const {todoName, todoDescripcion} = todo

    if(!todoName.trim() || !todoDescripcion.trim()){
        setError(true)
        return
    }
    
    setError(false)
    }

    const handleChange = e => {
        //se trae la copia del todo y le añade la del momento por lo que el usuario ingrese en los input
        
        const {name, value, type,checked} = e.target //esto devuelve un objeto del elemento seleccionado permitiendo poder acceder a sus atributos mediante el Destructuring
        
        setTodo({
            ...todo, [name]: type === 'checkbox' 
                                    ? checked 
                                    : value
        })

        /*setTodo(prev => ({ //funcion de flecha que se trae el ultimo elemento que se modificó
            ...prev, 
            [e.target.name]: e.target.value  
        }))*/


        /*setTodo({
            ...todo, [e.target.name]: e.target.type === 'checkbox' 
                                    ? e.target.checked 
                                    : e.target.value
        })*/
    }
  
  
    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    )
    
    
    return (
    <>
        <h2>No controlado</h2>
        
       {error && <PintarError />} {/* como devolvia null por ser un solo statement. si condicional 'error' es true haz lo siguiente ---> */}
        
        <form  onSubmit={handleSubmit}>
            <input
              type="text"
              name="todoName"
              placeholder="ingrese ToDo"
              className="form-control mb-2" 
              onChange={handleChange}
              value={todo.todoName}
              
            />

            <textarea
              name="todoDescripcion"
              className="form-control mb-2"
              placeholder="Ingrese descripcion del to do"
              onChange={handleChange}
              value={todo.todoDescripcion} 
            />

            <select
              name="todoEstado"
              className="form-control mb-2"
              onChange={handleChange}
              value={todo.todoEstado}
              >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <div className="form-check">
                <input
                  id="flexCheckDefault"
                  className="form-check-input border-primary"
                  type="checkbox"
                  name="todoCheck"
                  onChange={handleChange}
                  checked={todo.todoCheck} 
                
                />

                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault" 
                  
                >
                Dar prioridad
                </label>

            </div>
            
            
            <button className="btn btn-primary w-100" type="submit" >Agregar</button>
        </form>
    
    </>
  )
}

export default Formulario