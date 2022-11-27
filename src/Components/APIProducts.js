import React, {useEffect, useState} from "react";
import axios from "axios";

const APIProducts = () => {

    const [products, setProducts] = useState ([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/products/list")
        .then(resp=>{
            console.log(resp.data);
            setProducts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {products.map(product=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </table>
          
        </div>
    );

}
export default APIProducts;