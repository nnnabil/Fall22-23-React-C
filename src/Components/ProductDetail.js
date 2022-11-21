import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail=()=>{

    const {id} =useParams();
    return(
        <h1>This is Product Details of {id}</h1>
    )
}
export default ProductDetail;  