import {registrationDB} from '../repository/api.repository'
import { iUser } from '../interfaces';

const registration = async (name: string, surname: string, email: string, pwd: string):Promise <iUser> => {
    const data = await registrationDB(name, surname, email, pwd);
    return data
}

export {registration}