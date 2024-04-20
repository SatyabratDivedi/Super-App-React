import express from "express";
import user from "../models/loginSchema.js";

const route = express();

route.post("/create", async (req, res) => {
  const { email } = req.body;
  const existEmail = await user.findOne({ email });
  if (existEmail) {
    console.log("ye email phle se hai");
    return res.status(404).json({ msg: "this email is already used" });
  }
  const createdUser =  await user.create(req.body);
  console.log("new user create ho gya");
  return res.status(202).json({ msg: "user has created", createdUser: createdUser});
});

route.get('/getOneUser/:id', async(req, res)=>{
  const id = req.params.id;
    const findUser = await user.findById(id);
    if(findUser){
        console.log('user has found');
        return res.status(202).json({msg: 'user has found', data: findUser});
    }
    console.log('One user has not found');
    return res.status(404).json(' One user has not found');
})

route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const findEmail = await user.findOne({ email });
  try {
    if (!findEmail) {
      console.log("user nahi mila");
      return res.status(404).json("user has not found");
    }
    if (findEmail) {
      if (findEmail.password === password) {
        console.log("successfully login");
        return res.status(202).json("email and password matched successfully");
      }
      console.log("password is wrong");
      res.status(404).json("password is wrong");
    }
  } catch (error) {
    return console.log(error);
  }
});

route.delete("/delete", async (req, res) => {
  const email = req.body.email;
  const findEmail = await user.findOneAndDelete({ email });
  if (findEmail) {
    console.log("user has deleted");
    return res.status(202).json("user has deleted");
  }
  console.log("user nahi paya gya");
  return res.status(404).json("user has not found");
});

route.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
try {
    const findId = await user.findById({ id });
    if (findId) {
      const updatedUser = await user.findByIdAndUpdate(id, updateData, { new: true });
      console.log("password has updated");
      return res.status(202).json({ msg: "password has updated", user: updatedUser });
    }
    console.log("user nahi paya gya");
    return res.status(404).json("user has not found");
} catch (error) {
   return console.log(error);
}
});

export default route;
