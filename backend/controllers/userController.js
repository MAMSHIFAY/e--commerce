

// Rout for user login

import userModel from "../models/userModel";

const loginUser= async (req,res) =>{
        
}




// rout user registration


const registerUser=async(req,res) =>{
       try {
        const {name,email,password}=req.body;


        //cheking user already exist or not

        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User Already Exists"})
        }

        
        
       } catch (error) {
        
       }
}
    
//  rout for admin login

const adminLogin=async(req,res) =>{

}

export{
    loginUser,registerUser,adminLogin
}