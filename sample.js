import React, { useState } from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Userservice from "../Services/Userservice";

var data = [];
function ListEc2() {
  const navigate = useNavigate();
  const getall = () => {
    Userservice.getallInstance().then((res) => {
      console.log(res.data);
      data = res.data;
      navigate("/list");
      // dispatch({type:"users",value : res.data})
    });
  };
  const StopHandler = (id) => {
    Userservice.StopInstance(id).then((res) => {
      getall();
      navigate("/list");
    });
  };
  const StartHandler = (id) => {
    Userservice.StartInstance(id).then((res) => {
      getall();
      navigate("/list");
    });
  };
  const TerminateHandler = (id) => {
    Userservice.TerminateInstance(id).then((res) => {
      getall();
      navigate("/list");
    });
  };
  useEffect(() => {
    getall();
  }, []);
  return (
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
          {data.map((obj) => (
            <tr key={obj.InstanceId}>
              <td>{obj.InstanceId}</td>
              <td>{obj.ImageId}</td>
              <td>{obj.InstanceType}</td>
              <td>{obj.Status}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => StartHandler(obj.InstanceId)}
                >
                  Start
                </button>

                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => StopHandler(obj.InstanceId)}
                >
                  Stop
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => TerminateHandler(obj.InstanceId)}
                >
                  Terminate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEc2;