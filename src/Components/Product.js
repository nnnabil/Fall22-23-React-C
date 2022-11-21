import React, {Components} from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    return(
        <div>
            <p>Product: {props.name} Price: {props.price}</p>
        </div>
    )
}
export default Product;