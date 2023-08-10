import { getAllCourseDB } from './course.test';
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

afterEach(()=>{
    jest.clearAllMocks();
})

describe("getAllCourseDB", () => {
    test('success', async () => {
        const mockCourse = [{ id: 1, course: "test_course_1" }, { id: 2, course: "test_course_2" }, { id: 3, course: "test_course_3" }]

        mockClient.query.mockResolvedValue({ rows: [{ id: 1, course: "test_course_1" }, { id: 2, course: "test_course_2" }, { id: 3, course: "test_course_3" }] })
        const result = await getAllCourseDB();

        expect(result).toEqual([{ id: 1, course: "test_course_1" }, { id: 2, course: "test_course_2" }, { id: 3, course: "test_course_3" }]);
    })
  })