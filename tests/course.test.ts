import { createCourse } from "../src/service/course.service";
import * as repository from '../src/repository/course.reposutory';

describe("createCourse function", () => {
    test("Успешно", async () => {
        const functionInRepository = jest.spyOn(repository, 'createCourseDB');
        functionInRepository.mockResolvedValue([{ id: 1, course: 'javascript' }]);
        const result = await createCourse('javascript');

        expect(functionInRepository).toHaveBeenCalled();
    })
})

// describe("getAllCourse function", () => {
//     test("Успешно", async () => {
//         const functionInRepository = jest.spyOn(repository, 'getAllCourseDB');
//         functionInRepository.mockResolvedValue([{id: 1, course: 'javascript' }]);
//         const  result = await createCourse('javascript'); 

//         expect(functionInRepository).toHaveBeenCalled(); 
//     })
// })


describe("getCourseByIDDB function", () => {
    test("Успешно", async () => {
        const functionInRepository = jest.spyOn(repository, 'getCourseByIDDB');
        functionInRepository.mockResolvedValue([{ id: 1, course: 'javascript' }]);
        const result = await repository.getCourseByIDDB(1);
        expect(functionInRepository).toHaveBeenCalled()
        expect(result.length).toBeGreaterThan(0)
    })
})


describe("updateCourseByIDDB function", () => {
    test("Успешно", async () => {
        const functionInRepository = jest.spyOn(repository, 'updateCourseByIDDB');
        functionInRepository.mockResolvedValue([{ id: 1, course: 'typescript' }]);
        const result = await repository.updateCourseByIDDB("typescript", 1);
        expect(functionInRepository).toHaveBeenCalled()
        expect(result).toEqual([{ id: 1, course: 'typescript' }])
        expect(result.length).toBeGreaterThan(0); 
        
    })
})
