

const frutas = (props) => {
  
    console.log(props)
  
    return (
    <>
        <ul>
        {
          props.frutasApp.map((fruta, index) => (
            <li key={fruta}>{index +1} - {fruta}</li>
          ))
        }
        </ul>
    
    </>
  )
}

export default frutas