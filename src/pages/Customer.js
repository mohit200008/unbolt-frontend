import React from "react";
import {useParams} from "react-router-dom";

function Customer(){
    let { Id } = useParams();
    
    return(
        <h3>Requested Customer ID: {Id}</h3>
    );
}

export default Customer;
