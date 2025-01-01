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
module.exports = {createUser};