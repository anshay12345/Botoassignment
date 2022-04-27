import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import UserService from "../Service/UserService"
import "./bc.css"
const StopInstance=()=>{
    const [instanceid, setId]=useState("")
    const onIdHandler=(event)=>{
        setId(event.target.value)
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault()
        
       // console.log(instanceidObj)
        UserService.stopInstanceMethod({instanceid:instanceid}).then((res)=>{
            console.log(res)
        })
    }
    return(
        <div className="container bc">
            <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="instanceid">InstanceId</label>
                <input type="text" nam="instanceid"  class="form-control" onChange={onIdHandler}></input>
            </div>
                <button type="submit" class="btn btn-primary bt">Stop</button>
            </form>
        </div>
    )
}
export default StopInstance