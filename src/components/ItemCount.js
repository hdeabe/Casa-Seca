//compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems.

// - El número contador nunca puede superar el stock disponible
// - De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd - Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.

import React, { useState } from 'react'


function ItemCount() {



const [count, setCount] = useState(0)
const [stock, setStock] = useState(5)


function decrementCount () {
   
   if (count > 0){
    setCount(count-1)
    setStock(stock+1)}
}
    
function riseCount() {

    if (stock > 0 ){
    setCount(count+1)
    setStock(stock-1)}
}



const onAdd = quantity => alert(`Agregaste ${count} productos al carrito`)

    // Desarrollar lógica
    return(
        
        <div>
            
            <h1>Stock: {stock}</h1>
            <h1>Comprar: {count}</h1>


            

            <div className="button-wrapper">
            
            <button onClick={decrementCount}>-</button>

            <button onClick={riseCount}>+</button>
            
            <button onClick={onAdd}>Confirmar compra</button>
                
            </div>

        </div>
        
    )

    
   }


export default ItemCount