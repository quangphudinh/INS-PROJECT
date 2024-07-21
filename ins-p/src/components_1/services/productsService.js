import { get, post ,del,patch } from "../utils/request";
export const getUser = async () => {
    const result = await get("user")
    return result;
}

export const createUser = async (data) => {
    const result = await post("user", data);
    return result;
}

export const deleteUser = async (id) => {
    const result = await del("user/" + id)
    return result;
}

export const updateUser = async (id, data) => {
    const result = await patch("user/" + id, data);
    return result;
}