const AWS = require('aws-sdk');
//const { parse } = require("uuid");
let ec2=new AWS.EC2({
        region: 'us-east-1',
      })
  
      
class Ec2Service{

        
     async describeInstancesService(){
        const data = await ec2.describeInstances().promise();
        let arr=[];
        for (let i = 0; i < data["Reservations"].length; i++) {
          var obj = {};
          obj["InstanceId"] = data["Reservations"][i].Instances[0]["InstanceId"];
          obj["ImageId"] = data["Reservations"][i].Instances[0]["ImageId"];
          obj["InstanceType"] =
            data["Reservations"][i].Instances[0]["InstanceType"];
          obj["Status"] = data["Reservations"][i].Instances[0]["State"]["Name"];
          arr[i] = obj;
        }
        return arr
     }


    async instanceCreate(userObj){
       
        const params = {
            ImageId: userObj.ImageId,
            InstanceType: userObj.InstanceType,
            MinCount: userObj.MinCount,
            MaxCount: userObj.MaxCount 
          };

        const details = ec2.runInstances(params).promise()
        .then(function(err,data){
            return data
        });
        return await details
    }
    async instanceStop(objct){
        const params = {
            InstanceIds: [
                objct.instanceid
            ]
          };
          ec2.stopInstances(params, function(err, data) {
            if (err) {
              console.log(err, err.stack);
            } else {
              console.log(data);        
            }  
          });
    }

    async instanceTerminate(terminateRequest){
        const params = {
            InstanceIds: [
                terminateRequest.instanceid
            ]
          };
          
          ec2.terminateInstances(params, function(err, data) {
            if (err) {
              console.log(err, err.stack); 
            } else {
              console.log(data);           
            }  
          });
    }
}

module.exports = Ec2Service






