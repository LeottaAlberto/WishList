import express from 'express';
import { giftRouter } from './routers/gift';
import { categoryRouter } from './routers/category';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.use(express.json())


// async per le le funzioni asincrone e per fare le richieste al DB
// app.post('/', async (req, res) => {
//     const body=req.body
//     res.send("");

// });

// async function verifyUser(req:any,res:express.Response,next:express.NextFunction){
//     req.user="ciao"
//     next()
// }

// validate request
// app.use(verifyUser)
// add to request the user document from db

app.use('/gift',giftRouter);
app.use('/category', categoryRouter);

app.listen(PORT, "0.0.0.0", ()=>{
    console.log('Server in ascolto sulla porta: ' + PORT);
});