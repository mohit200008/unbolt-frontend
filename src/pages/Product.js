import React from "react";
import {useParams} from "react-router-dom";

function Product(){
    let { Id } = useParams();
    
    return(
        <h3>Requested Product ID: {Id}</h3>
    );
}

export default Product;
