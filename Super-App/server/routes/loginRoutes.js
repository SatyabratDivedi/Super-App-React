import express from 'express';
import user from '../models/loginSchema.js';

const route = express();

route.post('/create', async (req, res)=>{
    const {email} = req.body;
    const existEmail = await user.findOne({email});
   if(existEmail){
    console.log('ye email phle se hai');
    return res.status(404).json({msg:'this email is already used'});
   }
   await user.create(req.body);
   console.log('new user create ho gya')
   return res.status(202).json({msg:'user has created'});
})

route.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    const findEmail = await user.findOne({email});
    try {
        if(!findEmail ){
            console.log('user nahi mila');
            return res.status(404).json("user has not found");
        }
        if(findEmail){
            if(findEmail.password === password) {
              console.log('successfully login');
              return res.status(202).json('email and password matched successfully');
            }
            console.log('password is wrong');
            res.status(404).json('password is wrong');
        }
    } catch (error) {
       return console.log(error);
    }
})


export default route;