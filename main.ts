import express from "express";
import { Prisma } from "./src/db";
import authRouter from "./routers/auth";
import jwt from "jsonwebtoken"
import { CustomRequest } from "./interfaces";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());


app.use('/auth/',authRouter)

function verifyUser(req:CustomRequest,res:express.Response,next:express.NextFunction) {
  // validate jwt 
  const jwtToken=req.headers.authorization
  if(!jwtToken) return res.status(401).send('token not provided')
  const user=jwt.verify(jwtToken,'shhhhh')
  if(typeof user==='string')return res.status(400).send('malformed token')

  req.user={id:user.id}

  next()
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
