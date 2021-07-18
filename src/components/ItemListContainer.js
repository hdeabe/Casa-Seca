// que tenga una prop greeting, y muestra, el mensaje dentro del contenedor con el styling integrado.
// importarlo dentro de app.js y abajo del navbar
import ItemCount from './ItemCount.js'


function ItemListContainer(props){

    return(
        <div>
            <h3> Hola { props.name } . Bienvenido a mi e-commerce </h3>
            <ItemCount />
        </div>
    )

}

export default ItemListContainer