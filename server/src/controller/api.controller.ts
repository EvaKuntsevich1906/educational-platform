import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import {registration} from '../service/api.service'
const route = express.Router();

route.post('/reg', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await registration(name, surname, email, pwd);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

export default route;