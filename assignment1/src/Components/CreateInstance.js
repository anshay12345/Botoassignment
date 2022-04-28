import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import UserService from "../Service/UserService"
import "./bc.css"
const CreateInstance=()=>{
    const dispatch = useDispatch()
    const [ImageId, setid]=useState("")
    const [InstanceType, setType]=useState("")
    const [MinCount, setMinCount]=useState("")
    const [MaxCount, setMaxCount]=useState("")
    const [value,setValue]=useState(null)
    const onChangeImageIdHandler=(event)=>{
        setid(event.target.value)
        
    }
    const onChangeInstanceTypeHandler=(event)=>{
        setType(event.target.value)
      
    }
    const onChangeMinCountHandler=(event)=>{
        setMinCount(event.target.value)
       
    }
    const onChangeMaxCountHandler=(event)=>{
        setMaxCount(event.target.value)
        
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault()
        const instanceObj={
            ImageId:ImageId,
            InstanceType:InstanceType,
            MinCount:MinCount,
            MaxCount:MaxCount
        }
        console.log(instanceObj)
        UserService.createInstanceMethod(instanceObj).then((res)=>{
            console.log(res)
            if(res.status===200){
                setValue(1)
            }
            
        })
    }
   
    return(
        <div className="container ic">
            
            <form onSubmit={onSubmitHandler} method="post" action="">
                <div className="form-group">
                <label htmlFor="ImageId">ImageId</label>
                <input type="text" class="form-control" onChange={onChangeImageIdHandler}></input>
                </div>
                <div className="form-group">
                <label htmlFor="InstanceType">InstanceType</label>
                <input type="text" class="form-control" name="InstanceType" onChange={onChangeInstanceTypeHandler}></input>
                 </div>
                 <div className="form-group">
                <label htmlFor="MinCount">MinCount</label>
                <input type="number" class="form-control" name="MinCount" onChange={onChangeMinCountHandler}></input>
                </div>
                <div className="form-group">
                <label htmlFor="MaxCount">MaxCount</label>
                <input type="number" class="form-control" name="MaxCount" onChange={onChangeMaxCountHandler}></input>
               </div>
                <button type="submit" class="btn btn-primary bt">Submit</button>
            </form>
           {value?<span>Instance Created Successfully</span>: ""}
        </div>
    )
}

export default CreateInstance