import "./Footer.scss"

const Footer=({pages,totalCharacters})=>{
    return <footer className="footer-container">
        <h3>CHARACTERS: {totalCharacters}</h3>
        <h3>LOCATIONS: {pages}</h3>

        <h3 className="server-info">SERVER STATUS<div style={{width:"10px",
        height:"10px",
        marginRight:"5px",
        borderRadius:"50%",
        backgroundColor:"green"}}></div></h3>
    </footer>
}

export default Footer