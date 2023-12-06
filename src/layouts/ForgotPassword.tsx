'use client';
import { useState } from "react"; 
import Button from "../components/inputs/Button";
import TextFieldGroup from "../components/inputs/TextFieldGroup";
import useModel from "../hooks/useModel";
import Login from "./Login";
import useAlert from "../hooks/useAlert";

export default function ForgotPassword({

}) {
    const [_, setModel] = useModel();
    const [setShowAlert, setAlert] = useAlert();

    const [email, setEmail] = useState("hoductrung@gmail.com");

    const [errorTexts, setErrorTexts] = useState({
        email: "",
    });

    async function handleSignup() {

        try { 
            setAlert({
                message: "Register sucessfully."
            });
            setShowAlert(true);
        }
        catch (error) {
             
        }
    }
 
    function navToLogin() {
        setModel(<Login />)
    }

    return (
        <div className="w-120 px-6 py-8 flex flex-col gap-12 border border-concrete bg-grey shadow-md rounded-xl">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-center font-semibold">Forgot password?</h2>
                <p>Please enter the email address associated with your account and We will email you a link to reset your password.</p>
            </div>
            <section className="flex flex-col gap-4 ">
                 
                <TextFieldGroup
                    icon="envelope"
                    placeholder="Email"
                    value={email}
                    type="email"
                    onChange={(value) => setEmail(value)}
                    errorText={errorTexts.email}
                />
                 
            </section>
            <section className="flex flex-col gap-6 ">
                <Button onClick={handleSignup}>Send request</Button>

                <p className="text-center">
                    Go back to
                    {" "}
                    <button className="underline text-blue-400" onClick={navToLogin}>Login</button>
                </p>
            </section>
        </div>
    )
}
