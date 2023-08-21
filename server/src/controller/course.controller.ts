import express, { Request, Response } from 'express';
import { getAllCourse, getCourseByID, createCourse, updateCourseByID, deleteCourseByID } from '../service/course.service';
import { buildResponse } from '../helper/buildResponse';
const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllCourse();
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getCourseByID(id);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.post('/', async (req: Request, res: Response) => {
    try {
        const {course } = req.body;
        const data = await createCourse(course);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message)
    }
});

route.post('/:id', async (req: Request, res: Response) => {
    try {
        const {course } = req.body;
        const data = await createCourse(course);
        buildResponse(res, 200, data)
    } catch (err: any) {
        res.send(err.message)
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { course } = req.body;
        const { id } = req.params;
        const data = await updateCourseByID(course,  id);
        buildResponse(res, 200, data)
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteCourseByID (id);
        buildResponse(res, 200, data);
    } catch (err: any) {
        buildResponse(res, 404, err.message);
    }
})


export default route;