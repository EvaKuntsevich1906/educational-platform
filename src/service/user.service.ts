import { getAllUserDB, getUserByIDDB, createUserDB } from '../repository/user.repository'
import { iUser } from '../interfaces';


const getAllUser = async ():Promise <iUser> => {
    const data = await getAllUserDB();
    if (!data) throw new Error("В базе данных отсутствует информация о пользователях");
    return data
}

const getUserByID = async (id:number):Promise <iUser> => {
    const data = await getUserByIDDB(id);
    if (!data) throw new Error("Пользователя с таким id не существует");
    return data
}

const createUser = async (name: string, surname: string, email: string, pwd: string):Promise <iUser> => {
    const data = await createUserDB(name, surname, email, pwd);
    if (!data) throw new Error("Такого id нет ")
    return data
}

export { getAllUser, getUserByID, createUser }