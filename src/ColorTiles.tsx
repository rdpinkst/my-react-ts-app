import { useEffect, useState } from "react";
import "./colorTiles.css"

const HEXVALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function ColorTiles() {
    const [color, setColor] = useState<string>("");
    
    const style = { 
        backgroundColor: color,
    }

    useEffect(() => {
        createHex()
    },[])

    function createHex() {
        let val = "#";
        
        while(val.length < 7) {
          let index = Math.floor(Math.random() * HEXVALUES.length);
          val += HEXVALUES[index];
        }
        setColor(val);
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