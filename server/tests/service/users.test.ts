import { deleteUserByID, getAllUser, getUserByID, updateUserByID} from "../../src/service/user.service"
import * as repository from '../../src/repository/user.repository'

describe("getAllUser", () => {
    test("Успешно", async () => {
        const funcRepo = jest.spyOn(repository, "getAllUserDB")
        funcRepo.mockResolvedValue([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);

        const result = await getAllUser();

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);
        expect(result.length).toBeGreaterThan(0);
    })

    test("Ошибка", async () => {
        const funcRepo = jest.spyOn(repository, "getAllUserDB");
        funcRepo.mockResolvedValue([]);
        try {
            await getAllUser();
        } catch (error: any) {
            expect(funcRepo).toHaveBeenCalled();
            expect(error.message).toBe(`Таблица "Users" пустая`);
        }
    })
});


describe("getUserByIDDB", () => {
    test ("Успешно", async () => {
        const funcRepo = jest.spyOn(repository, "getUserByIDDB"); 
        funcRepo.mockResolvedValue([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);

        const result = await getUserByID(1);

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);
    }); 
test("Ошибка", async() => {
    const funcRepo = jest.spyOn(repository, "getUserByIDDB"); 
    funcRepo.mockResolvedValue([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);
    try {
        await getUserByID(5);
    } catch (error: any) {
        expect(funcRepo).toHaveBeenCalled();
        expect(error.message).toBe(`Пользователь с id=5 не найден`);
    }
})
}); 

describe("updateUserByID", () => {
    test("Успешно", async() => {
        const funcRepo = jest.spyOn(repository, "updateUserByIDDB");
        funcRepo.mockResolvedValue([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);
        
        const result = await updateUserByID("updated_Teeesr", "updated_Testeeeeeeer", "updated_test@gmail.com", "updated_pwdpwd", 7);
        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}])
    }); 
    test("Ошибка", async () => {
        const funcRepo = jest.spyOn(repository, "updateUserByIDDB");
        funcRepo.mockResolvedValue([]);
        try {
            await updateUserByID("updated_Teeesr", "updated_Testeeeeeeer", "updated_test@gmail.com", "updated_pwdpwd", 7);
        } catch (error: any) {
            expect(funcRepo).toHaveBeenCalled();
            expect(error.message).toBe(`Пользователь с id 7 не найден`);
        }
    });
  });


describe("deleteUserByID", () => {
    test ("Успешно", async () => {
        const funcRepo = jest.spyOn(repository, "deleteUserByIDDB");
        funcRepo.mockResolvedValue([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);
     
        const result = await deleteUserByID(1); 

        expect(funcRepo).toHaveBeenCalled();
        expect(result).toEqual([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);
        expect(result).toHaveLength(1);
    });

    test("Ошибка", async ()=> {
        const funcRepo = jest.spyOn(repository, "deleteUserByIDDB");
        funcRepo.mockResolvedValue([{"id": 1,"name": "Teeesr","surname": "Testeeeeeeer", "email": "test@gmail.com","pwd": "123test"}]);
        try {
            await deleteUserByID(1);
        } catch (error: any) {
            expect(funcRepo).toHaveBeenCalledWith(1);
            expect(error.message).toBe(`Пользователь с id= не найден`);
        }
    })
});