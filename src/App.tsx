import { useEffect, useState } from 'react'
import TitleTile from './TitleTile'
import ColorTiles from './ColorTiles'
import './App.css'

const HEXVALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function App() {
  const [tiles, setTiles] = useState<string[]>([]);

  function createHex() {
    let val = "#";
    
    while(val.length < 7) {
      let index = Math.floor(Math.random() * HEXVALUES.length);
      val += HEXVALUES[index];
    }
    return val;
  }

  useEffect(() => {
    createColorArray();
  }, [])

  function createColorArray() {
    let arr = []
    for(let i = 0; i < 28; i++) {
      arr.push(createHex())
    }
    console.log("clicker")
    setTiles(arr);
  }



  return (
    <>
      <div className='tile-container'>
        <TitleTile createNewArray ={createColorArray} />
        {tiles.map((tile, index) => {
          return <ColorTiles color={tile} key={index} />
        })}
      </div>
     
    </>
  )
}

export default App
