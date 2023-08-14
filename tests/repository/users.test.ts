import { getAllUserDB, getUserByIDDB, updateUserByIDDB } from "../../src/repository/user.repository";

const mockClient = { query: jest.fn() };

jest.mock("pg", () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => mockClient)
            }
        })
    }
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("getAllUsersDB", () => {
    test('Успешно', async () => {
        mockClient.query.mockResolvedValue({
            rows:
                [{ "id": 10, "name": "new_user1", "surname": "abc", "email": "new1@gmail.com", "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq" },
                { "id": 11, "name": "new_user2", "surname": "abc", "email": "new2@gmail.com", "pwd": "$2b$04$EnKP/OWbqNESFWjplhPhfufJs/Cyc590peQMQz3Ix8Wd41lbyPdnK" },
                { "id": 12, "name": "new_user3", "surname": "abc", "email": "test@gmail.com", "pwd": "$2b$04$l3ZTbmQ9.DSchh2QmP.c..H8.1EKiE5v5.tD0T57FUwNM/tjzyDPy" }]
        });
        const result = await getAllUserDB();
        expect(result).toEqual([{ "id": 10, "name": "new_user1", "surname": "abc", "email": "new1@gmail.com", "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq" },
        { "id": 11, "name": "new_user2", "surname": "abc", "email": "new2@gmail.com", "pwd": "$2b$04$EnKP/OWbqNESFWjplhPhfufJs/Cyc590peQMQz3Ix8Wd41lbyPdnK" },
        { "id": 12, "name": "new_user3", "surname": "abc", "email": "test@gmail.com", "pwd": "$2b$04$l3ZTbmQ9.DSchh2QmP.c..H8.1EKiE5v5.tD0T57FUwNM/tjzyDPy" }]);

        expect(mockClient.query).toHaveBeenCalled();
    })
});


describe("getUserByIDDB", () => {
    test('Успешно', async () => {
        mockClient.query.mockResolvedValue({ rows: [{ "id": 10, "name": "user1", "surname": "surname1", "email": "emailtest1@gmail.com", "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq" }] });
        const result = await getUserByIDDB(10);
        expect(mockClient.query).toHaveBeenCalled();
        expect(result).toEqual([{ "id": 10, "name": "user1", "surname": "surname1", "email": "emailtest1@gmail.com", "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq" }]);
    });
});

describe("updateUserByIDDB", () => {
    test('Успешно', async () => {
        const mock = { "id": 10, "name": "user1", "surname": "surname1", "email": "emailtest1@gmail.com", "pwd": "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq" };
        mockClient.query.mockResolvedValue({rows: mock});
        const result = await updateUserByIDDB("user1", "surname1", "emailtest1@gmail.com", "$2b$04$zY3ihxRmp5MB4jrlYCjLKeqSWOAJl5Q2mn6Ck7zXQRopmfdmPQVYq", 10);
        expect(result).toEqual(mock);
        expect(mockClient.query).toHaveBeenCalled();
    })
});

