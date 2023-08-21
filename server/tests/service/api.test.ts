import { registration, authorizationUser } from "../../src/service/api.service";
import * as repository from '../../src/repository/api.repository';
import bcrypt from "bcrypt";

describe("registration", () => {
    test("Успешно", async () => {
        const funcRepoGetByEmail = jest.spyOn(repository, "getByEmail");
        const bcryptFunction: any = jest.spyOn(bcrypt, "hash")
        const funcRepoRegistration = jest.spyOn(repository, "registrationDB");
        funcRepoGetByEmail.mockResolvedValue([])
        bcryptFunction.mockResolvedValue('sfs45jhetgrg');
        funcRepoRegistration.mockResolvedValue([{id: 1,"name": "name_test","surname": "surname_test", "email": "tz@gmail.com",  "pwd": "sfs45jhetgrg"}]);
        const result = await registration("name_test", "surname_test", "tzgmailcom", "sfs45jhetgrgflsjdfg");
        expect(result).toEqual([{ id: 1, "name": "name_test",   "surname": "surname_test","email": "tz@gmail.com", "pwd": "sfs45jhetgrg" }]);
    });

    test('Ошибка', async () => {
        const mockGetByEmail = jest.spyOn(repository, "getByEmail");
        mockGetByEmail.mockResolvedValue([{ id: 1, "name": "name_test",   "surname": "surname_test","email": "tz@gmail.com", "pwd": "sfs45jhetgrg" }]);
        try {
            await registration("name_test", "surname_test", "tz@gmail.com", "sfs45jhetgrg")
        } catch (error: any) {
            expect(mockGetByEmail).toHaveBeenCalled();
            expect(mockGetByEmail).toHaveBeenCalledWith("tz@gmail.com");
            expect(error.message).toBe(`Такой email уже зарегестрирован`);
        }
    })
})


describe("authorizationUser", () => {
    test("Успешно", async () => {
        const mockUserFound = jest.spyOn(repository, "getByEmail")
        const mockCompare : any = jest.spyOn(bcrypt, "compare");

        mockUserFound.mockResolvedValue([{ id: 1, "name": "name_test",   "surname": "surname_test","email": "tz@gmail.com", "pwd": "sfs45jhetgrg" }]);
        mockCompare.mockResolvedValue(true);

        const result = await authorizationUser("tz@gmail.com", "sfs45jhetgrg");

        expect(result).toBe(`Авторизированный пользователь [{"id":1,"name":"name_test","surname":"surname_test","email":"tz@gmail.com","pwd":"sfs45jhetgrg"}]`);
     
    })
    test('Ошибка', async () => {
        const mockAuthorizationUser = jest.spyOn(repository, 'getByEmail');
        const mockBcryptFunction: any= jest.spyOn(bcrypt, "compare");

        mockAuthorizationUser.mockResolvedValue([{ id: 1, "name": "name_test",   "surname": "surname_test","email": "tz@gmail.com", "pwd": "sfs45jhetgrg" }])
        mockBcryptFunction.mockResolvedValue(false);

        try {
            await authorizationUser("tz@gmail.com", "sfs45jhetgrg");
        } catch (error: any) {
            expect(mockAuthorizationUser).toHaveBeenCalled();
            expect(error.message).toBe('Пароли не совпадают.')
        }
    })
})