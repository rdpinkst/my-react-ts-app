import "./titleTile.css"

type propType = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}


function TitleTile({onClick} : propType) {
    return (
        <div className="container">
            <button onClick={onClick}>
               <h1>Color Picker</h1> 
            </button>
            
        </div>
    )
}

export default TitleTile;