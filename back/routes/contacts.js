const express = require("express");
const router = express.Router();
const Contact = require('../models/Contact');
const controllers = require("../controllers/contact.controllers")


// test routing
// router.get("/",(req,res)=>{
//     res.send("hello")
// });


//@Methode POST
//@desc POST contact
//@Path:http://localhost:5000/api/contact
router.post("/", controllers.postContact);


//@Methode GET
//@desc GET all contacts
//@Path:http://localhost:5000/api/contact
router.get("/",controllers.getAll);



//@Methode GET
//@desc GET one contact by id
//@Path:http://localhost:5000/api/contact/:id
//@Params id
router.get("/:id",controllers.getOneById);


//@Methode DELETE
//@desc DELETE ONE contact by id
//@Path:http://localhost:5000/api/contact/:id
//@Params id
router.delete("/:id",controllers.delete);


//@Methode PUT
//@desc update one contact by id
//@Path:http://localhost:5000/api/contact/:id
//@Params id Body
router.put("/:id",controllers.update);


module.exports = router;