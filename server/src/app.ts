import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import user from '../src/controller/user.controller'
import course from './controller/course.controller'
import api from './controller/api.controller'
const app = express();

app.use(bodyParser.json());

app.use('/user', user); 

app.use('/course', course)

app.use("/api", api)

app.use((err, req:Request, res:Response, next) => {
    res.send(err.message)
})

export default app;