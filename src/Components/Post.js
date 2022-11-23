import React, {useEffect, useState} from "react";


const Post = (props) => {

    const PostStyle = {
        backgroundColor : "#FF0000",
        padding: "10px",
        color: "#fff",
    }
    return(
        <div style={PostStyle}>
            <span>{props.userId}</span>
            <span>{props.title}</span>
        </div>
    );

}
export default Post;