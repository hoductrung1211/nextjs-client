'use client';
import Image from "next/image";
import loginImgSrc from "@/app/(manager)/(auth)/assets/login_02.png";
import userImgSrc from "@/app/(manager)/(auth)/assets/account_01.png";
import TextField from "@/src/components/inputs/TextField";
import Checkbox from "@/src/components/inputs/Checkbox";
import Link from "next/link";
import Button from "@/src/components/inputs/Button";
import Logo from "@/src/components/navigation/Logo";
import { useState } from "react";
import { login } from "@/src/apis/auth";
import { isAxiosError } from "axios";

export default function Page() {
    return (
        <div className="grid place-items-center h-screen ">
            <div className="container flex rounded-lg overflow-hidden shadow-md">
                <section className="w-8/12 p-5 flex flex-col bg-grey">
                    <span className="">
                        <Logo />
                    </span>
                    <Image
                        src={loginImgSrc}
                        alt=""
                    />
                    <p className="text-sm text-end">Copyright © 2023 TeS Inc. All rights reserved.</p>
                </section>
                <LoginSection />
            </div>
        </div>
    )
}

function LoginSection() {
    const [username, setUsername] = useState("hoductrung");
    const [password, setPassword] = useState("123456");
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

    return (
        <section className="w-5/12 p-10 flex flex-col gap-14">
            <h2 className="flex flex-col items-center gap-4 text-2xl text-center font-semibold">
                Login
                <div className="w-28 ">
                    <Image
                        className="w-full"
                        src={userImgSrc}
                        alt="user login"
                    />
                </div>
            </h2>
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

                    <Link className="underline text-blue-400" href={""}>Forgot password</Link>
                </div>
            </section>
            <section className="mt-auto flex flex-col gap-6 ">
                <Button onClick={handleLogin}>Login</Button>
            </section>
        </section>
    )
}