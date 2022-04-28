import UserService from "../Service/UserService";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


let array=[];
const DisplayInstance =()=>{
    const navigate = useNavigate();
    const [value, setValue]=useState(null)
    const getUserData = () => {
        UserService.displayInstanceMethod().then((res) => {
          //console.log(res.data);
            array=res.data
            setValue(1)
            navigate("/instance")
        });
      };
      

      useEffect(() => {
        getUserData();
      }, []);
     
    //console.log(array)
    return(
      <div>
      {value?(
      <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Instance Id</th>
            <th>Image Id</th>
            <th>Instance Type</th>
            <th>Status</th>
        
          </tr>
        </thead>
        <tbody>
          {array.map((obj) => (
            <tr key={obj.InstanceId}>
              <td>{obj.InstanceId}</td>
              <td>{obj.ImageId}</td>
              <td>{obj.InstanceType}</td>
              <td>{obj.Status}</td>
              <td>
                

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" className="btn btn-primary" onClick={()=>navigate("/instance/create")}>New Instance</button>
    </div>)
    : (<h2>Loading...</h2>)}
    </div>
    )
}

export default DisplayInstance