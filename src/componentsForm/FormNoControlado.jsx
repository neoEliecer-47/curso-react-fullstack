import { useRef } from "react"




const FormNoControlado = () => {
  
    const formulario = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log('procesando')

        const datos = new FormData(formulario.current)
        //console.log(...datos.entries())

        const objetoDatos = Object.fromEntries([...datos.entries()])
        //console.log(objetoDatos)
        const {todoName, todoDescripcion} = objetoDatos

        if(todoName.trim() === ""  || !todoDescripcion.trim()){
          console.log('algun campo vacio')
          return
        }

        console.log('pasó validacion')
    }
  
    return (
    <>
        <h2>No controlado</h2>
        
       
        
        <form ref={formulario} onSubmit={handleSubmit}>
            <input
              type="text"
              name="todoName"
              placeholder="ingrese ToDo"
              className="form-control mb-2"
              defaultValue="holaaaa" 
              
            />

            <textarea
              name="todoDescripcion"
              className="form-control mb-2"
              placeholder="Ingrese descripcion del to do" 
              defaultValue="holaaaaaaaaaaaaa" 
            />

            <select name="todoEstado" className="form-control mb-2" defaultValue="pendiente" >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>

            <button className="btn btn-primary w-100" type="" >Agregar</button>
        </form>
    
    </>
  )
}

export default FormNoControlado