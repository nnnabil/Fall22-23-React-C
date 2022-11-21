import React, { useState } from "react";

const ColorState=()=>{
    var [color, setColor] = useState("Red");

    return(
        <div>
            <h1 style={{backgroundColor: color}}>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")} >Blue</button>
            <button type="button" onClick={() => setColor("green")} >Green</button>
            <button type="button" onClick={() => setColor("yellow")} >Yellow</button>
        </div>
    )
}
export default ColorState;