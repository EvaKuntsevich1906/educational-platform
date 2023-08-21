import { getAllCourseDB, getCourseByIDDB, createCourseDB, updateCourseByIDDB, deleteCourseByIDDB } from './course.test';
export * from '../../src/repository/course.repository';

const client = { query: jest.fn() };

const mockClient = {
    query: jest.fn()
}

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => mockClient)
            }
        })
    }
});

afterEach(() => {
    jest.clearAllMocks();
})

describe("getAllCourseDB", () => {
    test('Успешно', async () => {
        const mockCourse = [{ id: 1, course: "test1" }, { id: 2, course: "test2" }, { id: 3, course: "test3" }]

        mockClient.query.mockResolvedValue({ rows: [{ id: 1, course: "test1" }, { id: 2, course: "test2" }, { id: 3, course: "test3" }] })
        const result = await getAllCourseDB();

        expect(result).toEqual([{ id: 1, course: "test1" }, { id: 2, course: "test2" }, { id: 3, course: "test3" }]);
    })
});


describe("getCourseByIDDB", () => {
    test('Успешно', async () => {
        const mockCourse = [{ id: 7, course: " javascript" }];

        mockClient.query.mockResolvedValue({ rows: mockCourse });
        const result = await getCourseByIDDB(7);

        expect(result).toEqual(mockCourse);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
    })
});

describe("createCourseDB", () => {
    test("success", async () => {
        const mockCourse = [{ id: 1, course: "phyton" }];

        mockClient.query.mockResolvedValue({ rows: mockCourse });
        const result = await createCourseDB("phyton");

        expect(result).toEqual(mockCourse);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
    })
}); 


describe("updateCourseByIDDB", () => {
    test("success", async () => {
        const mockCourseUpdated = [{ id: 1, course: "updated_course" }]
        mockClient.query.mockResolvedValue({ rows: mockCourseUpdated })
        const result = await updateCourseByIDDB("course_to_update", 1);

        expect(mockClient.query).toHaveBeenCalled();
        expect(result).toEqual(mockCourseUpdated);
        expect(result.length).toBe(1);
    })
}); 

describe("deleteCourseByIDDB", ()=>{
    test("Success", async ()=>{
        const mockDelete = [{id:1, course:"course_to_delete"}];
        mockClient.query.mockResolvedValue({rows:mockDelete});
        const result = await deleteCourseByIDDB(1);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result).toEqual(mockDelete);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(1);
    })
});