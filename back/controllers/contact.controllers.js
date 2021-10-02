const Contact = require("../models/Contact");


module.exports = {

    postContact : async(req,res)=>{
        try{
            const newContact = new Contact({...req.body});
            if(!req.body.email){
                res.status(400).send({message:"Email is required"});
                return;
            }
            const user = await Contact.findOne({email:req.body.email});
            if(user){
                res.status(400).send({message:"User already exist"});
                return;
            }
            const response =  await newContact.save();
            res.send({response:response,message:"User added"})
        }catch(error){
            console.log(error);
            res.status(500).send({message:"Can not save"});
        }
    },

    getAll : async(req,res)=>{
        try{
            const result = await Contact.find()
            res.send({response:result,message:"Geting contacts successful"})
        }catch(error){
            res.status(400).send({message:"Can not get contacts"})
        }
    },

    getOneById : async(req,res)=>{
        try{
            const result = await  Contact.findOne({_id:req.params.id})
            res.send({response:result,message:"Geting contact successful"})
        }catch(error){
            res.status(400).send({message:"There is no contact"})
        }
    },

    delete : async(req,res)=>{
         
        try{
            const result = await Contact.deleteOne({_id : req.params.id});
            console.log(result);
            result.deletedCount? res.send("Contact deleted successful"):res.send("There is no contact with this id"); 
        }catch(error){
            res.send({message:"There is no contact"})
        }
    },

    update : async(req,res) => {
        try{
            const result = await  Contact.updateOne({_id:req.params.id},{$set:{...req.body}});
            result.modifiedCount?res.send({message:"User updated"}):res.send({message:"User already updated"});
        }catch(error){
            res.status(400).send({message:"No user with this id"})
        }
    }
}