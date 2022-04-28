import UserService from "../Service/UserService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

var array=[];
const BucketListing =()=>{

  const[value, setValue] = useState(null)

  const navigate = useNavigate();
    const getUserData = () => {
        UserService.getBucket().then((res) => {
          //console.log(res.data);
         
          setValue(1)
          array=res.data["Buckets"]
          navigate("/list")
        });
      };

      useEffect(() => {
        getUserData();
      }, []);   
    return(
   
      <div>{value? 
        <div>
        <table className="table table-striped">
    <thead>
      <tr>
        <th>Bucket Name</th>
        <th>CreationDate</th>    
      </tr>
    </thead>
    <tbody>
      {array.map((obj) => (
        <tr key={obj.Name}>
          
          <td>{obj.Name}</td>
          <td>{obj.CreationDate}</td>
          
        </tr>
      ))}
    </tbody>
  
  </table>
  <button type="button" className="btn btn-primary" onClick={()=>navigate("/create")}>New Bucket</button>
    </div>  
       : <h2>Loading.....</h2>}</div>
    
    )
}
export default BucketListing

