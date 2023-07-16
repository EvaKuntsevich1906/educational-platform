import express from 'express';

const route = express.Router();

//test route
route.get('/', (req, res) => {
    try {
        res.send("okay")
    } catch (err: any) {
        res.send(err.message)
    }
});

route.get('/', (req, res) => {
    try {

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