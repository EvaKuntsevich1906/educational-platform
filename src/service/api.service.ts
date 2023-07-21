import {registrationDB} from '../repository/api.repository'
import { iUser } from '../interfaces';

const registration = async (name: string, surname: string, email: string, pwd: string):Promise <iUser> => {
    const data = await registrationDB(name, surname, email, pwd);
    if (!data) throw new Error("Такого id нет ")
    return data
}

export {registration}