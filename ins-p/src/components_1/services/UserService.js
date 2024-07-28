import { get } from "../utils/request";
export const login = async (email,password) => {
    const result = await get(`user?email=${email}&password=${password}`)
    return result;
}

export const getId = async (id) => {
    const result = await get(`user?id=${id}`)
    return result;
}