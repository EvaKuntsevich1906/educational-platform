import { createCourse, getAllCourse, getCourseByID } from "../../src/service/course.service";
import * as repository from '../../src/repository/course.reposutory';


describe("createCourse", () => {
    test("Успешно", async () => {
        const mock = jest.spyOn(repository, 'createCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'javascript' }]);
        const result = await createCourse('javascript');

        expect(mock).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'javascript' }]);
    })
    test('Ошибка', async () => {
        const mock = jest.spyOn(repository, "createCourseDB");
        mock.mockResolvedValue([]);
        try {
            await getAllCourse();
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe(`Не удалось сохранить курс`)
        }
    })
});

describe('getCourse', () => {
    test("Успешно", async () => {
        const mock = jest.spyOn(repository, "getAllCourseDB");
        mock.mockResolvedValue([{ id: 1, course: "javascript" }, { id: 2, course: "typescript" }, { id: 3, course: "phyton" }]);

        const result = await getAllCourse();
        expect(mock).toHaveBeenCalled(); //проверка, что что функция вызывалась
        expect(result).toEqual([{ id: 1, course: "javascript" }, { id: 2, course: "typescript" }, { id: 3, course: "phyton" }]);
        expect(result.length).toBeGreaterThan(0);
    })
    test('Ошибка', async ()=>{
        const mock = jest.spyOn(repository, "getAllCourseDB");
        mock.mockResolvedValue([]);
        try {
            await getAllCourse();
        } catch (error:any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe(`таблица с курсами пуста`)
        }
    })
});

describe('getCourseByID', () => {
    test("Успешно", async () => {

        const mock = jest.spyOn(repository, "getCourseByIDDB");
        mock.mockResolvedValue([{ id: 1, course: "javascript" }]);
        const result = await getCourseByID(1);
        expect(mock).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: "javascript" }])

    })
});

describe("updateCourseByIDDB", () => {
    test("Успешно", async () => {
        const mock = jest.spyOn(repository, 'updateCourseByIDDB');
        mock.mockResolvedValue([{ id: 1, course: 'typescript' }]);
        const result = await repository.updateCourseByIDDB("typescript", 1);
        expect(mock).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'typescript' }])
        expect(result.length).toBeGreaterThan(0);
    })
});

describe("deleteCourseByIDDB function", () => {
    test("Успешно", async () => {
        const mock = jest.spyOn(repository, 'deleteCourseByIDDB');
        mock.mockResolvedValue([{ id: 1, course: 'typescript' }]);
        const result = await repository.deleteCourseByIDDB(1);
        expect(mock).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'typescript' }])
        expect(result.length).toBeGreaterThan(0);

    })
});
