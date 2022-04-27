const express = require("express");
const router = express.Router();
const UserService = require("../service");
const serviceData = new UserService()
router.get("/", async (req,res)=>{
    const data = await serviceData.getBucket()
    console.log(data)
    res.send(data)
})

router.post("/bucket", (req,res)=>{
    const data=serviceData.createBucket(req.body)
    res.send(data)
})

router.post("/delobj", (req,res)=>{
    const data=serviceData.deleteObject(req.body)
    res.send(data)
})
router.delete("/delete", (req,res)=>{
    const data=serviceData.deleteBucket(req.body)
    res.send(data)
})

module.exports = router;
