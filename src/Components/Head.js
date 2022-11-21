import React, {Components} from "react";
import { Link } from "react-router-dom";

const Head = () => {
    return(
        <div>
            <Link to="">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/color">Color State</Link>
            <Link to="/effect">Effect State</Link>
        </div>
    )
}
export default Head;