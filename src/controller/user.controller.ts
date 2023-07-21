import express, { Request, Response } from 'express';
import { getAllUser, getUserByID, updateUserByID, deleteUserByID } from '../service/user.service';
import { buildResponse } from '../helper/buildResponse';
const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllUser();
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getUserByID(id);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const { id } = req.params;
        const data = await updateUserByID(name, surname, email, pwd, id);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUserByID (id);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})


export default route;