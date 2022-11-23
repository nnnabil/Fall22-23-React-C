import React, {useEffect, useState} from "react";
import axios from "axios";
import Post from "./Post";

const AllPosts = () => {

    const [posts, setPosts] = useState ([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            {/* <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                {posts.map(post=>(
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                    </tr>
                ))}
            </table> */}
            {
                posts.map(post=>(
                    <Post key={post.id} userId={post.id} title={post.title}></Post>
                ))
            }
        </div>
    );

}
export default AllPosts;