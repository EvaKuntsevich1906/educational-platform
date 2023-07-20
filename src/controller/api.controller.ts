import express, { Request, Response } from 'express';
import { buildResponse } from '../helper/buildResponse';
import { registration } from '../service/api.service';
const route = express.Route();


route.get('/registration', async (req: Request, res: Response) => {
    try {
        const {namr, surname} = req.body;
        const data = await registration();
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});