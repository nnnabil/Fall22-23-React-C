import React, {Components} from "react";
import Product from "./Product";

const Hello = () => {
    return(
        <div>
            <Product name="IPhone" price="12000"/>
            <Product name="Samsung" price="15000"/>
            <Product name="Nokia" price="10000"/>
        </div>
    )
}
export default Hello;