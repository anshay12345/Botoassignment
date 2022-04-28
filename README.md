# Botoassignment


Name: Anshay Rastogi
Breif of the documentation:
    --> About Project Source Code
    --> Docker Image 
    --> Github link

-------------------------------------------BACKEND------------------------------------------------

1: ABOUT PROJECT SOURCE CODE:
  --> main node file 
      - server.js
        -port(3001)
                      
      - first route to "/" (user.js)
          GET    - "/bucket"  -->creating bucket along with creating files within it and giving data to it
                          # {
                          #   "name": "newbucket",
 SAMPLE JSON DATA------>> #     "fileName": "file1",
                          #     "data": "New File"
                          # }       
          POST - "/delobj/:name" -->deleting content of the bucket with name <name>(unique name)
                          # {
SAMPLE JSON DATA------>>  #   "Bucket": "newbucket",
                          #   "Key": "file1"
                          # }  
          DELETE - "/delete" -->deleting the whole bucket with name <name>(unique name)
                          # {
SAMPLE JSON DATA------>>  #   "Bucket": "newbucket",
                          # } 
      - second route to "/instance" (ec2.js)
          GET  - "/" -->listing all the instances details
          POST - "/create" -->creating an instance
                          # {
                          #   "ImageId": "ami-0b0ea68c435eb488d",
 SAMPLE JSON DATA------>> #     "InstanceType": "t2.micro",
                          #     "MinCount": 1,
                          #     "MaxCount": 1
                          # }
          POST - "/stop" -->stoping an instance
                          # {
 SAMPLE JSON DATA------>> #     "instanceid": "xxxxxxxx"
                          # }
          POST - "terminating" -->terminating an instance 
                          # {
 SAMPLE JSON DATA------>> #     "instanceid": "xxxxxxxx"
                          # }
  --> dependencies and devdependecies
      - dependencies:
          -  "devDependencies": 
              {
                "aws-sdk": "^2.1119.0",
                "uuid": "^8.3.2"
              }
      
      -dependencies:
          -  "dependencies": 
              {
                "cors": "^2.8.5",
                "express": "^4.17.3",
                "helmet": "^5.0.2",
                "mongoose": "^6.3.1"
              }
2: DOCKER IMAGE:
  - "anshay123/cliassignment:latest"   --> Docker image for backend
  - "anshay123/frontend"   --> Docker image for frontend part
  Both the services are connected through docker-compose file     

3: GITHUB LINK:
  - https://github.com/anshay12345/cliassignment.git

-------------------------------------------FRONTEND------------------------------------------------

                                      

PARENT APP                  CHILD APP  


                            BucketCreation  
                            BucketListing  
                            CreationInstance 
App------------->>          DeleteBucketComponent 
                            DisplayInstance  
                            StopInstance  
                            TerminateInstance
