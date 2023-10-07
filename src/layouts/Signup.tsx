'use client';
import { useState } from "react"; 
import Link from "next/link";
import Button from "../components/inputs/Button";
import { validateEmail, validatePassword, validateUsername } from "../utils/functions/validateForm";
import TextFieldGroup from "../components/inputs/TextFieldGroup";
import useModel from "../hooks/useModel";
import Login from "./Login";
import { isAxiosError } from "axios";
import { register } from "../apis/auth";

export default function Signup({

}) {
    const [showModel, setModel] = useModel();
    const [username, setUsername] = useState("hoductrung");
    const [email, setEmail] = useState("hoductrung@gmail.com");
    const [password, setPassword] = useState("123456");
    const [confirmPassword, setConfirmPassword] = useState("123456");

    const [errorTexts, setErrorTexts] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    async function handleSignup() {
        if (!validateInput())
            return;

        try {
            await register({
                username,
                email,
                password,
                confirmPassword
            });

            alert("Register successfully!");
        }
        catch (error) {
            if (isAxiosError(error)) {
                console.log(error);
            }
            alert("Register failed!");
        }
    }

    function validateInput() {
        const isUsernameValid = validateUsername(username);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        const newErrors = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        };

        !isUsernameValid && (newErrors.username = "Username is NOT valid");
        !isEmailValid && (newErrors.email = "Email is NOT valid");
        !isPasswordValid && (newErrors.password = "Password is NOT valid");

        isPasswordValid && !(password === confirmPassword) && (newErrors.confirmPassword = "Confirm password is NOT match with password");

        setErrorTexts(newErrors);

        return (isUsernameValid && isEmailValid && isPasswordValid && (password === confirmPassword));
    }

    function navToLogin() {
        setModel(<Login />)
    }

    return (
        <div className="w-120 px-6 py-8 flex flex-col gap-12 border border-concrete bg-grey shadow-md rounded-xl">
            <h2 className="text-2xl text-center font-semibold">Sign up</h2>
            <section className="flex flex-col gap-4 ">
                <TextFieldGroup
                    icon="user"
                    placeholder="Username"
                    value={username}
                    onChange={(value) => setUsername(value)}
                    errorText={errorTexts.username}
                /> 
                <TextFieldGroup
                    icon="envelope"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(value) => setEmail(value)}
                    errorText={errorTexts.email}
                />
                <TextFieldGroup
                    icon="key"
                    placeholder="Password"
                    value={password}
                    onChange={(value) => setPassword(value)}
                    type="password"
                    errorText={errorTexts.password}
                />
                <TextFieldGroup
                    icon="key"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(value) => setConfirmPassword(value)}
                    type="password"
                    errorText={errorTexts.confirmPassword}
                />
            </section>
            <section className="flex flex-col gap-6 ">
                <Button onClick={handleSignup}>Sign up</Button>

                <p className="text-center">
                    Already have account?
                    {" "}
                    <button className="underline text-blue-400" onClick={navToLogin}>Login now</button>
                </p>
            </section>
        </div>
    )
}
