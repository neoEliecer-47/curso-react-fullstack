import Contador from "./componentes/Contador"
import Frutas from "./componentes/frutas"


 //rafce
const saludo = 'hola, mundo, saludo desde variable'

const SaludoBienvenida = () => (
   <h2 className="text-success">Bienvenido!</h2>
)



const SaludoDespedida = () => {
  return <h2 className="text-danger">Adios!</h2>
}




const Aplicacion = () => {
const objeto1 = {
  primary: 'text-primary',
  danger: 'text-danger'
}

const user = true

const funcionClick = () => (
  console.log('diste click')
)

const funcionClick2 = (nombre) => {
  console.log(`${nombre} dio click`)
}




const frutas1 = ['🎃','🍓','🍅','🍐']
  
  return (
    <div className="container border border-dark mt-3">
      <p className={objeto1.primary}>{saludo}</p>
      {user ? <SaludoBienvenida /> : <SaludoDespedida />}

      
      <Contador />
      
      <Frutas frutasApp={frutas1} />
      


      <button
      className="btn btn-primary"
      onClick= {funcionClick}
      >
        dame click
      </button>

      <button className="btn btn-primary border-dark" onClick={() => funcionClick2('Eliecer')}> click 2</button>
    </div>
  )
}

export default Aplicacion//rafce











