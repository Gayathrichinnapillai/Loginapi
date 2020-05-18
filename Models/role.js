const db = require("../config/dbconnection"); 

const Role = db.model(
  "Role",
  new db.Schema({
    name: String
  })
);

module.exports = Role;


// const db=require('../dbconnection');  
//     const Regschema=db.Schema({  
//         Firstname:{type:String,required:true},  
//         Lastname:{type:String,required:true},
//         Phonenumber:{type:Number,required:true},
//         Emailid:{type:String,required:true},
//         Address:{type:String,required:true}
// });  
  
// module.exports=db.model('Registration',Regschema);