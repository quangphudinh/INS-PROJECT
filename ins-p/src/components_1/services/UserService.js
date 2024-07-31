import { get , post } from "../utils/request";
export const login = async (email,password) => {
    const result = await get(`user?email=${email}&password=${password}`)
    return result;
}

export const getRegister = async (email,username) => {
    const result = await get(`user?email=${email}&username=${username}`)
    return result;
}

export const getdataUser = async () => {   
    const result = await get("user");
    return result;
}

export const getId = async (id) => {
    const result = await get(`user?id=${id}`)
    return result;
}

export const createUser = async (data) => {
        const result = await post("user", data);
        return result;
}

//Phần post bài
export const getdataPost = async () => {   
    const result = await get("posts");
    return result;
}