import {registrationDB,getByEmail} from '../repository/api.repository'
import { iUser } from '../interfaces';
import bcrypt from "bcrypt";

const registration = async (name: string, surname: string, email: string, pwd: string):Promise <iUser []> => {
    const salt = 3;
    const data = await getByEmail(email);
    if(data.length) throw new Error(`Такой email уже зарегестрирован`);
    const pwd_hashed:string  = await bcrypt.hash(pwd, salt);
    const result = await registrationDB(name, surname, email, pwd_hashed);
    return result;
}

const  authorizationUser = async (email:string, pwd:string) =>  {
    const userFound = await getByEmail(email);
    if(!userFound.length) throw new Error(`Пользователя с таким email не существует`);
    const isMatch = await bcrypt.compare(pwd, userFound[0].pwd);
    if(!isMatch) throw new Error('Пароли не совпадают.');
    return `Авторизированный пользователь ${JSON.stringify(userFound)}`;
}

export {registration, authorizationUser};