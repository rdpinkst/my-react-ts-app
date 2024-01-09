import { useEffect, useState } from "react";
import "./colorTiles.css"

function ColorTiles({ color }) {
    
    const style = { 
        backgroundColor: color,
    }


    

      function copyClipboard() {
        navigator.clipboard.writeText(color).then(() => {
            console.log("Copied to clipboard");
        }).catch(() => {
            console.log("Couldn't Copy to clipboard")
        })
      }

    return (
        <div onClick={copyClipboard} className="color-tile" style={style}>
            <p className="color-name">{color}</p>
        </div>
    )
}

export default ColorTiles;