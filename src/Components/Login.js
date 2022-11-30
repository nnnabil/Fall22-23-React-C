import React, {useState, userEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    let[token, setToken]= useState("");
    let[name, setName] = useState("");
    let[password, setPassword] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{
        var obj = {username: name, password: password};
        alert (obj.username);
        axios.post("http://127.0.0.1:8000/api/login",obj)
        .then(resp=>{
            var token = resp.data;
            console.log(token);
            var user = {userId: token.userid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            if(token == "No user found"){
                navigate('/login');
            }else{
                navigate('/apiproducts');
            }
        }).catch(err=>{
            console.log(err);
        });


    }
    return(
        <div>
            <form>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            </form>
                <button onClick={loginSubmit}>Login</button>
        </div>

    )
}
export default Login;  