

var AWS = require('aws-sdk');
var uuid = require('uuid');

let s3=new AWS.S3({
  region: 'us-east-1'
})

class UserService{
  createBucket(bucketobj){
    var bucketName = bucketobj.name + uuid.v4();
    var keyName = bucketobj.fileName;
    var body = bucketobj.data
    var bucketPromise = s3.createBucket({
      Bucket: bucketName
    },(error,success)=>{
      if(error){
        console.log(error)
      }
      else{
        console.log(success)
      }
    }).promise();
    bucketPromise.then(
      function(data) {
        var objectParams = {Bucket: bucketName, Key: keyName, Body: body};
        var uploadPromise = s3.putObject(objectParams).promise();
        uploadPromise.then(
          function(data) {
            console.log(bucketName + " Bucket has been feaded with the data");
            
          });
    }).catch(
      function(err) {
        console.error(err, err.stack);
    });
    //console.log(uploadPromise)
    return "added";
  }

  async getBucket(){
    let response = await s3.listBuckets().promise();
    return response
  }
   async deleteObject(objct){
     let deletebucket= await s3.deleteObject({
      Bucket: objct.Bucket, 
      Key: objct.Key
     },(error,success)=>{
       if(error){console.log(error)}
       else{console.log(success)}
     })
     return deletebucket
   }

   async deleteBucket(userObj){ 
    var bucketParams = {
      Bucket : userObj.Bucket
    };
    s3.deleteBucket(bucketParams, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
        return data
      }
    });
   }

}

module.exports = UserService;

