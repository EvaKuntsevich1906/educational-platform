import { getAllCourseDB, getCourseByIDDB, createCourseDB, updateCourseByIDDB, deleteCourseByIDDB } from '../repository/course.reposutory';
import { iCourse } from '../interfaces';

const getAllCourse = async (): Promise<iCourse> => {
    const data = await getAllCourseDB();
    if (!data) throw new Error("В базе данных отсутствует информация о курсах");
    return data
}

const getCourseByID = async (id: number): Promise<iCourse> => {
    const data = await getCourseByIDDB(id);
    if (!data) throw new Error("Курса с таким id не существует");
    return data
}

const  createCourse= async (course: string): Promise<iCourse> => {
    const data = await createCourseDB(course);
    if (!data) throw new Error("Такого id нет ")
    return data
}

const updateCourseByID= async (course: string,  id: number): Promise<iCourse> => {
    const data = await updateCourseByIDDB(course,  id);
    if (!data) throw new Error("Такого курса не существует ")
    return data
}
const deleteCourseByID = async (id: number): Promise<iCourse> => {
    const data = await deleteCourseByIDDB(id);
    if (!data) throw new Error("Такого пользователя не существует ")
    return data
}
export { getAllCourse, getCourseByID, createCourse, updateCourseByID, deleteCourseByID }