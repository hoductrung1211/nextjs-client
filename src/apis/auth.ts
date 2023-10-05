import axios from "./axios.config";

interface IRegisterRequest {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export const register = (registerRequest : IRegisterRequest) => {
    return axios.post("authentication/register", registerRequest);
}