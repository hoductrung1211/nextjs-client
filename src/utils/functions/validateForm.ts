


const usernameRegex = /.{3,}/;
const passwordRegex = /.{3,}/;
const emailRegex = /.{3,}/;

export function validateUsername(
    username: string
) {
    return usernameRegex.test(username);
}

export function validatePassword(
    password: string
) {
    return passwordRegex.test(password);
}

export function validateEmail(
    email: string
) {
    return emailRegex.test(email);
}