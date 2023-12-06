'use client';
import { useState } from "react";
import TextField from "../components/inputs/TextField";
import Checkbox from "../components/inputs/Checkbox";
import Link from "next/link";
import Button from "../components/inputs/Button";
import useModel from "../hooks/useModel";
import Signup from "./Signup";
import { isAxiosError } from "axios";
import { login } from "../apis/auth";
import ForgotPassword from "./ForgotPassword";

export default function Login({

}) {
    const [_, setModel] = useModel();
    const [username, setUsername] = useState("dinhtruongson");
    const [password, setPassword] = useState("Dinhtruongson@123");
    const [isRemembered, setIsRemembered] = useState(false);

    async function handleLogin() {
        try {
            await login({
                username,
                password
            });
            alert("Login successfully!");
        }
        catch (error) {
            if (isAxiosError(error)) {
                alert("Login failed!");
            }
        }
    }

    function navToSignup() {
        setModel(<Signup />)
    }

    function navToForgotPassword() {
        setModel(<ForgotPassword />)
    }

    return (
        <div className="w-120 px-6 py-8 flex flex-col gap-12 border border-concrete bg-grey shadow-md rounded-xl">
            <h2 className="text-2xl text-center font-semibold">Login</h2>
            <section className="flex flex-col gap-4 ">
                <TextField
                    icon="user"
                    placeholder="Username"
                    value={username}
                    onChange={(value) => setUsername(value)}
                />
                <TextField
                    icon="key"
                    placeholder="Password"
                    value={password}
                    onChange={(value) => setPassword(value)}
                    type="password"
                />
                <div className="mt-2 flex items-center justify-between">
                    <Checkbox
                        checked={isRemembered}
                        onChange={(checked) => setIsRemembered(checked)}
                        text="Remember password"
                    />

                    <button className="underline text-blue-400"  onClick={navToForgotPassword}>Forgot password</button>
                </div>
            </section>
            <section className="flex flex-col gap-6 ">
                <Button onClick={handleLogin}>Login</Button>

                <p className="text-center">
                    Don't have account yet?
                    {" "}
                    <button className="underline text-blue-400" onClick={navToSignup}>Sign up now</button>
                </p>
            </section>
        </div>
    )
}
