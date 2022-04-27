import axios from 'axios'

const USER_BASE_URL = "http://localhost:3001"
const headers={
    "Content-Type": 'application/json'
}

class UserService{
    createBucket(objData){
        return axios.post(USER_BASE_URL+"/bucket", objData)
    }
    getBucket() {
        //console.log(headers);
        return axios.get(USER_BASE_URL, { headers: headers });
      }
    deleteComponent(deldata){
        return axios.post(USER_BASE_URL+"/delobj", deldata);
    }
    deleteBucketMethod(deleteObj){
        return axios.delete(USER_BASE_URL+"/delete",deleteObj)
    }
    createInstanceMethod(objdataI){
        return axios.post(USER_BASE_URL+"/instance/create", objdataI)
    }
    stopInstanceMethod(idObj){
        return axios.post(USER_BASE_URL+"/instance/stop", idObj);
    }
    terminateInstanceMethod(terminateObj){
        return axios.post(USER_BASE_URL+"/instance/terminate", terminateObj);
    }
    displayInstanceMethod(){
        return axios.get(USER_BASE_URL+"/instance", { headers: headers })
    }
   
    
}

export default new UserService();