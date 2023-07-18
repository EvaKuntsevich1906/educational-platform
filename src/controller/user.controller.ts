import express, {Request, Response} from 'express';
import { getAllUser, getUserByID, createUser } from '../service/user.service';
import { buildResponse } from '../helper/buildResponse';
const route = express.Router();

route.get('/', async (req:Request, res:Response):Promise <void> => {
    try {
        const data = await getAllUser();
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.get('/:id', async (req:Request, res:Response):Promise <void>  => {
    try {
        const {id} = req.params;
        const data = await getUserByID(id);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.post('/', async (req:Request, res:Response) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.post('/', async (req:Request, res:Response) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.send(data)
    } catch (err: any) {
        res.send(err.message)
    }
});

route.put('/', (req, res)  => {
    try {

    } catch (err: any) {
        res.send(err.message)
    }
});

route.delete('/', (req, res) => {
    try {

    } catch (err: any) {
        res.send(err.message)
    }
})


export default route;