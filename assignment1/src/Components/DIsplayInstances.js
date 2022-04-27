import UserService from "../Service/UserService";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
let array=[];

const DisplayInstance =()=>{
    const navigate = useNavigate();
    const getUserData = () => {
        UserService.displayInstanceMethod().then((res) => {
          console.log(res.data);
            array=res.data
            console.log(res.data)
            navigate("/instance")
        });
      };
      const stopInstanceHandler=(instanceid)=>{
        UserService.stopInstanceMethod(instanceid).then((res)=>{
          //console.log(instanceid)
          getUserData()
          navigate("/instance")
        })
      }

      const terminateInstanceHandler=(instanceid)=>{
        UserService.terminateInstanceMethod(instanceid).then((res)=>{
          getUserData()
          navigate("/instance")
        })
      }

      useEffect(() => {
        getUserData();
      }, []);
     
    console.log(array)
    return(
      <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Instance Id</th>
            <th>Image Id</th>
            <th>Instance Type</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Terminate</th>
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
                

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => stopInstanceHandler(obj.InstanceId)}
                >
                  Stop
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => terminateInstanceHandler(obj.InstanceId)}
                >
                  Terminate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default DisplayInstance