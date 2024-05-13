const express = require("express")
const router = express.Router()
const crud = require("../model/model")
const { model } = require("mongoose")

//get single data using name

router.get("/",async (req,res)=>{
    try{
        const all_data =await crud.find({name:req.body.name})
        console.log(all_data)
        res.json(all_data)
    }
    catch(e){
        res.status(500).json({message:e.message})
    }

})

//all data

router.get("/abc",async(req,res)=>{
    try {
     const all_Data = await crud.find()
     res.json(all_Data)
    } catch (error) {
     console.log(error)
    }
 })



//get one data
router.get("/:id",async (req,res)=>{
    const data = await crud.findById(req.params.id)
    try{
        res.status(201).json(data)
    }
    catch(e){
        res.status(500).json({message:e.message})
    }
})



//create data
router.post("/",async (req,res)=>{
    let data = new crud({
        name:req.body.name,
        roll_number:req.body.roll_number,
        address:req.body.address
    })
    try{
        const new_data = await data.save()
        res.status(201).json(new_data)
    }catch(e){
        res.status(400).json({message:e.message})
    }
})

//update------------->patch- to update single info-------put:to update all info
router.put("/:id",async(req,res)=>{
    try{
        const new_data= await crud.findOneAndUpdate({_id:req.params.id},{
            $set:{
            name:req.body.name,
            roll_number:req.body.roll_number,
            address:req.body.address
            }
        })
        res.status(201).json(new_data)
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
 
})

//delete
router.delete("/:id",async(req,res)=>{
   try {
   const data = await crud.findByIdAndDelete(req.params.id)
   res.json(data)
   } catch (error) {
    res.status(500).json({message:error.message})
   }
})


module.exports = router