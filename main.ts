import express from "express";
import { Prisma } from "./src/db";
import authRouter from "./routers/auth";
import jwt from "jsonwebtoken"
import { CustomRequest } from "./interfaces";
import { CONST_VALUES } from "./config";
import userRouter from "./routers/User";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

app.use('/auth/',authRouter)

app.use(verifyUser)
app.use('/user/',userRouter)

function verifyUser(req:CustomRequest,res:express.Response,next:express.NextFunction) {
  // validate jwt 
  const jwtToken=req.headers.authorization
  if(!jwtToken) return res.status(401).send('token not provided')
  try {
    const user=jwt.verify(jwtToken,CONST_VALUES.jwt_secret)
    if(typeof user==='string')return res.status(400).send('malformed token')
  
    req.user={id:user.id}
    next()
  } catch (error) {
    return res.status(400).send('invalid token')
  }
}

Prisma.$connect()
  .then((ok) => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log("Server in ascolto sulla porta: " + PORT);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
