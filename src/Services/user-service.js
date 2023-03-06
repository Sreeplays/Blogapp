import { myAxios } from "./helper";

export const signUp = (user) => {
    return myAxios.post('/api/v1/auth/register').then((response) => response.json())
}