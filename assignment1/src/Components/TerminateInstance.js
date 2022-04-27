import { useState } from "react"
import UserService from "../Service/UserService"
import "./bc.css"
const TerminateInstance=()=>{
    const [instanceid, setId]=useState("")
    const onIdHandler=(event)=>{
        setId(event.target.value)
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault()
        const instanceidObj={
            instanceid:instanceid
        }
        console.log(instanceidObj)
       UserService.terminateInstanceMethod(instanceid).then((res)=>{
           console.log(res)
       })
    }
    return(
        <div  className="container bc">
            <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label htmlFor="instanceid">InstanceId</label>
                <input type="text" nam="instanceid" class="form-control" onChange={onIdHandler}></input>
                </div>
                <button type="submit" class="btn btn-primary bt">Terminate</button>
            </form>
        </div>
    )
}
export default TerminateInstance