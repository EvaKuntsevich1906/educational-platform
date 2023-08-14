import { registrationDB, getByEmail } from "../../src/repository/api.repository";

const mockUser = { query: jest.fn() };

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => {
                    return mockUser
                })
            }
        })
    }
})

beforeEach(() => jest.clearAllMocks());

describe("registrationDB", () => {
    test("Успешно", async () => {
        const mock = [{name: "test_name", surname: "test_surname",email: "test_mail@gmail.com", pwd: "w1d2_test", id: 3 }]
        mockUser.query.mockResolvedValue({ rows: mock });
        const result = await registrationDB("test_name", "test_surname", "test_mail@gmail.com", "w1d2_test");
        expect(result).toEqual(mock)
    })
});

describe("getByEmail", () => {
    test("Успешно", async () => {
        mockUser.query.mockResolvedValue( { rows: [ {id: 3, name: "test_name", surname: "test_surname",email: "test_mail@gmail.com", pwd: "w1d2_test"}]});
        const result = await getByEmail("123@gmail.com");
        expect(result).toEqual([{id: 3, name: "test_name", surname: "test_surname",email: "test_mail@gmail.com", pwd: "w1d2_test"}])
        expect(mockUser.query).toHaveBeenCalled();
        expect(result[0].id).toBe(3);
        expect(result.length).toBe(1);
    })
});