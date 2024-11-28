import { useState } from "react"

const Power = ( props : { nome : string, startCounter : number  } ) => { 

    const [value, setValue] = useState(props.startCounter)

    function increment() { 
        setValue(value => value + 1)
    }

    return (
        <button onClick={increment} >
             <div style={{ width : '50px', height : '50px', borderRadius : '100%', backgroundColor : 'red' }} >
                {props.nome} {value}
            </div>
        </button>
       
    )
}

export default Power