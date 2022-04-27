import "./Home.css"
import { useNavigate } from "react-router-dom"
const Home=()=>{
    const navigate=useNavigate()
    return(
    <div className="outerDiv">
        <div className="Home">
        <div className="CardMainDiv">
            <button className="button" onClick={()=>navigate("/list")}>Bucket List</button>
            <button className="button" onClick={()=>navigate("/create")}>Create Bucket</button>
            <button className="button" onClick={()=>navigate("/delobj")}>Delete Object in Bucket</button>
            <button className="button" onClick={()=>navigate("/instance")}>Instance List</button>
            <button className="button" onClick={()=>navigate("/instance/create")}>Create Instance</button>
            <button className="button" onClick={()=>navigate("/instance/stop")}>Stop Instance</button>
            <button className="button" onClick={()=>navigate("/instance/terminate")}>Terminate Instance</button>
        </div>
        </div>
    </div>
    )
}

export default Home