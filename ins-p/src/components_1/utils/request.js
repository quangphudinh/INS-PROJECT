const API_DOMAIN = "http://localhost:3000/";

//hàm GET API
export const get = async (path) => {
    const response = await fetch(API_DOMAIN + path);
    const result = await response.json();
    return result;
}

//hàm POST API
export const post = async (path ,options) => {
    const reponse = await fetch(API_DOMAIN + path , {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(options), //chuyển data sang chuỗi JSON và đẩy qua body ở postman
    })
    const result = await reponse.json();
    return result;
}

//hàm DELETE API
export const del = async (path) => {
    const respone = await fetch(API_DOMAIN + path, {
        method: 'DELETE'
    })
    const result = await respone.json();
    return result;
}

//hàm PATCH API
export const patch = async (path, options) => {
    const reponse = await fetch(API_DOMAIN + path, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options), //chuyển data sang chuỗi JSON và đẩy qua body ở postman
        })
        const result = await reponse.json();
        return result;
}