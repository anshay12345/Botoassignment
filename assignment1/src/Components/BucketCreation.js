import UserService from "../Service/UserService"
import { useState } from "react"
import { useDispatch } from "react-redux"
import "./bc.css"
const NewBucketCreation=()=>{
    const dispatch = useDispatch()
    const [name,setName]=useState("")
    const [fileName, setfilename]= useState("")
    const [data, setData]=useState("")
    const [value,setValue]=useState("")
    const nameChangeHandler=(event)=>{
        setName(event.target.value)
        dispatch({type:"name", action: event.target.value})
    }
    const keyChangeHandler=(event)=>{
        setfilename(event.target.value)
        dispatch({type:"fileName", action: event.target.value})
    }
    const dataChangeHandler=(event)=>{
        setData(event.target.value)
        dispatch({type:"data", action: event.target.value})
    }
    const creatingHandler=(event)=>{
        event.preventDefault()
        const obj={
            name:name,
            fileName:fileName,
            data:data
        }
        console.log(obj)
        UserService.createBucket(obj).then((res)=>{
            console.log(res);
            if(res.status===200){
                setValue(1)
            }
        })
    }
   
    
    return(
        
<div className="container bc">
        <form onSubmit={creatingHandler} method="post">
        <div class="form-group">
        <label htmlFor="name">Bucket Name</label>
        <input type="text" class="form-control" name="name" onChange={nameChangeHandler}/>
        </div>

        <div class="form-group">
        <label htmlFor="Key">Key</label>
        <input type="text" class="form-control" name="Key" onChange={keyChangeHandler}/>
        </div>
        <div class="form-group">
        <label for="data">Key</label>
        <input type="text" class="form-control" name="data" onChange={dataChangeHandler}/>
        </div>
        <button type="submit" class="btn btn-primary bt">Submit</button>
        </form>
        {value? <span>Bucket Created Successfully</span>:""}
</div>
    )
}

export default NewBucketCreation