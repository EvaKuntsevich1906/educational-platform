import { getAllUserDB, getUserByIDDB, updateUserByIDDB , deleteUserByIDDB} from '../repository/user.repository'
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

const updateUserByID= async (name: string, surname: string, email: string, pwd: string, id: number):Promise <iUser> => {
    const data = await updateUserByIDDB (name, surname, email, pwd, id);
    if (!data) throw new Error("Такого пользователя не существует ")
    return data
}
const deleteUserByID= async (id: number) :Promise <iUser> => {
    const data = await deleteUserByIDDB (id);
    if (!data) throw new Error("Такого пользователя не существует ")
    return data
}
export { getAllUser, getUserByID, updateUserByID, deleteUserByID }