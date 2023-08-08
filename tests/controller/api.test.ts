import { registrationDB, getByEmail } from "../../src/repository/api.repository";
const mockUser = { query: jest.fn() }

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
