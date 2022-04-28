import "./Home.css"
import { useNavigate } from "react-router-dom"
const Home=()=>{
    const navigate=useNavigate()
    return(
    <div className="outerDiv">
        <div className="Home">
        <div className="CardMainDiv">
            <div>
                <button className="button" onClick={()=>navigate("/list")}>Bucket List</button>
                <button className="button" onClick={()=>navigate("/create")}>Create Bucket</button>
                <button className="button" onClick={()=>navigate("/delobj")}>Delete Object in Bucket</button>
            </div>
        </div>
        </div>
        <div className="Home1">
        <div>
            <div>
                <button className="button" onClick={()=>navigate("/instance")}>Instance List</button>
                <button className="button" onClick={()=>navigate("/instance/create")}>Create Instance</button>
                <button className="button" onClick={()=>navigate("/instance/stop")}>Stop Instance</button>
                <button className="button" onClick={()=>navigate("/instance/terminate")}>Terminate Instance</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Home