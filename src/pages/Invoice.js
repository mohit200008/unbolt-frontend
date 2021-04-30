import React from "react";
import {useParams} from "react-router-dom";

function Invoice(){
    let { Id } = useParams();
    
    return(
        <h3>Requested Invoice ID: {Id}</h3>
    );
}

export default Invoice;
