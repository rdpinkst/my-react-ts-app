import { useEffect, useState } from 'react'
import TitleTile from './TitleTile'
import ColorTiles from './ColorTiles'
import './App.css'

function App() {
  const [tiles, setTiles] = useState<[]>([]);

  useEffect(() => {
    let arr = []
    for(let i = 0; i < 28; i++) {
      arr.push(<ColorTiles key={i} />)
    }
    setTiles(arr);
  }, [])


  return (
    <>
      <div className='tile-container'>
        <TitleTile />
        {tiles}
      </div>
     
    </>
  )
}

export default App
