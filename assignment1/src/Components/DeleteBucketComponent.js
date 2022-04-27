import UserService from "../Service/UserService"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"

const DeleteBucketComponent=()=>{


    const dispatch = useDispatch()

    const [Bucket, setName]=useState("")
    const [Key, setkey]=useState("")

    const onDeleteHandler=(event)=>{
        dispatch({type:"Bucket", value: event.target.value})
        setName(event.target.value)
    }
    const onKeyDeleteHandler=(event)=>{
        dispatch({type:"Key", value: event.target.value})
        setkey(event.target.value)
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault()
        const bucketObj={
            "Bucket": Bucket,
            "Key": Key
        }
        console.log(bucketObj)
        UserService.deleteComponent(bucketObj).then((res)=>{
            console.log(res)
        })
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="Bucket">Bucket Name</label>
                    <input type="text" name="Bucket" onChange={onDeleteHandler}></input>
                <label htmlFor="Key">Key</label>
                    <input type="text" name="Key" onChange={onKeyDeleteHandler}></input>
                <button type="submit">Click</button>
            </form>
        </div>        
    )
}
export default DeleteBucketComponent