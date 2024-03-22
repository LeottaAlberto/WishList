
import {Router} from 'express'
import { editUser, login, register } from '../lib/login'

const authRouter= Router()

//curl -X POST 'http://localhost:3000/auth/login' -H 'Content-Type: Application/json' -d '{"email":"luigi@gmail.com", "password": "123prova"}'
authRouter.post("/login", async(req,res)=>{
    const body=req.body
    try {
      const token = await login(body)
      res.json({token})
    } catch (error) {
      res.status(413).send('wrong authorization')
    }
    console.log('Logged succesfully');
    
  })
  
  //curl -X POST 'http://localhost:3000/auth/register' -H 'Content-Type: Application/json' -d '{"email":"luigi@gmail.com", "username":"luigi", "password":"123prova", "dateBirth":"2024-03-15T16:12:04.607Z", "gender":"male" }'
authRouter.post("/register", async (req, res) => {
    const body = req.body;
    try {
      const token= await register(body)
      res.json(token);
    } catch (error) {
      res.status(413).send('wrong authorization')
    }
    console.log("User created succesfully");
    
  });

  authRouter.post("/edit/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
      const token= await editUser(id,body)
      res.json(token);
    } catch (error) {
      res.status(413).send('wrong authorization')
    }
    console.log("User created succesfully");
    
  });

  export default authRouter