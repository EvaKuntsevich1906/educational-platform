import express from 'express';
import { getAllUser, getUserByID, createUser } from '../service/user.service';
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        res.send(data);
    } catch (err: any) {
        res.send(err.message)
    }
});

route.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        const data = await getUserByID(id);
        res.send(data);
    } catch (err: any) {
        res.send(err.message)
    }
});

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.send(data)
    } catch (err: any) {
        res.send(err.message)
    }
});

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.send(data)
    } catch (err: any) {
        res.send(err.message)
    }
});

route.put('/', (req, res) => {
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