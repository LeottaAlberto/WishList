import express, { Response as ExResponse, Request as ExRequest } from "express";
import { CONST_VALUES } from "./config";
import { Prisma } from "./lib/db";
// import userRouter from "./routers/user";
import { RegisterRoutes } from './routes';
import swaggerUi from "swagger-ui-express";


const app = express();
const PORT = CONST_VALUES.port;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(express.json());

// app.use('/auth/', authRouter)
// app.use('/gift', giftRouter);
// app.use('/category', categoryRouter);

// app.use(verifyUser)
// app.use('/user/',userRouter)

// function verifyUser(req:CustomRequest,res:express.Response,next:express.NextFunction) {
//   // validate jwt 
//   const jwtToken=req.headers.authorization
//   if(!jwtToken) return res.status(401).send('token not provided')
//   try {
//     const user=jwt.verify(jwtToken,CONST_VALUES.jwt_secret)
//     if(typeof user==='string')return res.status(400).send('malformed token')
  
//     req.user={id:user.id}
//     next()
//   } catch (error) {
//     return res.status(400).send('invalid token')
//   }
// }

RegisterRoutes(app)

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("./swagger.json"))
    );
  });

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