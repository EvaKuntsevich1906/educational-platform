import request from "supertest";
import app from "../../src/app";

let id;


test('GET', async () => {
    const res = await request(app).get('/course');
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(1);
})

test('GET/:id', async () => {
    const res = await request(app).get(`/course/${id}`);
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
})

test('POST', async () => {
    const res = await request(app).post('/course').send({course: "javascript"})
    id = res.body[0].id;
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
})

test('PUT', async ()=>{
    const res = await request(app).put(`/course/${id}`).send({course: "typescript"})
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{id: id, course:"typescript"}]);
    expect(res.body.length).toBe(1);
})

test('DELETE', async ()=>{
    const res = await request(app).delete(`/course/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: id, course: 'typescript' }]);
    expect(res.body.length).toBe(1)
})