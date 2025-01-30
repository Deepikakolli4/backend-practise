const services = require('../Services/userServices');
const createUser = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await services.createUser;
        if(user){
            return res.status(200).json({status:201 , message:'sucessfully created'});
        }else{
            return res.status(400).json({status:400 , message:'user exists'});
        }
    }catch(error){
        return res.status(400).json({status:400 , message:'error in creating user'});
    }
};

const getUser = async(req,res)=>{
    try{
    const {email} = req.body;
    users = await services.getUser(email);
    if(users.length===0){
        return res.status(200).json({status:200 , data:[]});
    }else{
        return res.status(200).json({status:200 , data:users});
    }
    }catch(error){
        res.status(400).json({status:400,message:error.message});
    }
}
module.exports = {createUser,getUser};