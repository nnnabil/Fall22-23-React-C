import React, {useState, useEffect} from "react";
import axiosConfig from './axiosConfig';

const APIProducts = (props) =>{
    const[products, setProducts] = useState([]);

    // alert(localStorage.getItem("user"));


    useEffect(()=>{
        axiosConfig.get("products/list")
        .then(resp=>{
        console.log(resp.data);
        setProducts(resp.data);
         }).catch(err=>{
        console.log(err);
    });
    },[]);

    return(
        <div>
            <h1>All Products</h1>
            <ul>
                {
                    products.map(p=>(
                        <li key={p.id}>{p.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default APIProducts;