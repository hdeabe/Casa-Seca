import React from "react";

function Item(props) {
    return (


        <ul class="list-group list-group-flush">
        <li class="list-group-item"><h3>{props.title}</h3></li>
        <li class="list-group-item"><p>{props.description}</p></li>
        <li class="list-group-item">{props.bottom}</li>
        <li class="list-group-item">{props.img}</li>
            <div class="image-parent">
                <img src="data:image/png;base64,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"></img>
            </div>
       
        </ul>





        // <div className='box flex jc flow-c'>
        //     <div className='box_title'>
        //         <h3>{props.title}</h3>
        //     </div>
        //     <div className='box_body'>
        //         <p>{props.description}</p>
        //     </div>
        //     <div className='box_footer'>
        //         <p>{props.bottom}</p>
        //     </div>
        //     <div>
        //         <p>{props.precio}</p>
        //     </div>
        // </div>
    )
}



export default Item;
    