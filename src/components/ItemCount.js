//compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems.

// - El número contador nunca puede superar el stock disponible
// - De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd - Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.

import React, { useEffect, useState } from 'react'


function ItemCount() {


    useEffect(() => {

        if (initial > stock) {
            
            
            alert(`No hay más stock`)}
        // Actualiza el title de la página en cada click!
        
      })

const [initial, onAdd] = useState(0);

const stock = 5;





    // Desarrollar lógica
    return(
        
        <div>
            <h1>{initial}</h1>
            
            <div className="button-wrapper">
            
                <button onClick={()=>onAdd(initial-1)}>-</button>
            

                <button onClick={()=>onAdd(initial+1)}>+</button>
            </div>

        </div>
        
    )

    
   }


export default ItemCount