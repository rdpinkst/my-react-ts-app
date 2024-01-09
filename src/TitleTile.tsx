import "./titleTile.css"

function TitleTile({createNewArray}) {
    return (
        <div className="container">
            <button onClick={createNewArray}>
               <h1>Color Picker</h1> 
            </button>
            
        </div>
    )
}

export default TitleTile;