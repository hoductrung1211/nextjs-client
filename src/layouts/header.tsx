'use client';
import Logo from "@/src/components/navigation/Logo";
import Link from "next/link";
import { leftNavigation } from "@/src/config/headerNavigation";
import useModel from "../hooks/useModel";
import Login from "./Login";
import Signup from "./Signup";

export default function Header({

}) { 
    return (
        <header className="sticky top-0 inset-x-0 bg-grey">
            <div className="flex justify-between w-[1200px] h-14 mx-auto px-3 leading-14 font-semibold">
                <LeftHeaderNavigation />
                <RightHeaderNavigation />
            </div>
        </header>
    )
}

function LeftHeaderNavigation({

}) {
    return (
        <nav className="flex gap-10">
            <Logo />
            {
                leftNavigation.map(link => 
                    <Link
                        className=" border-b-2 border-transparent hover:border-greensea transition duration-150"
                        key={link.text}
                        href={link.href}>
                        {link.text}
                    </Link>    
                )
            }
        </nav>
    )
}

function RightHeaderNavigation({

}) {
    const [showModel, setModel] = useModel();

    function handleClickLogin() {
        setModel(<Login />);
        showModel(true);
    }
    function handleClickSignup() {
        setModel(<Signup />);
        showModel(true);
    }

    return (
        <nav className="flex gap-10">
            <button
                className="h-full border-b-2 border-transparent hover:border-greensea transition duration-150"
                onClick={handleClickLogin}
            >
                Login
            </button>
            <button
                className="h-full border-b-2 border-transparent hover:border-greensea transition duration-150"
                onClick={handleClickSignup}
            >
                Sign up
            </button>
        </nav>
    )
}