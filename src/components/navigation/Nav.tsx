'use client';

import { useState } from "react";
import Icon from "../built-in/Icon";

const navBaseClass = " py-1 rounded-md text-start font-semibold text-dark-light text-opacity-80 hover:text-opacity-100  hover:bg-slate-200 "

export function NavGroup({
    text,
    children
}: {
    text?: string,
    children?: React.ReactNode
}) {
    const [isShow, setIsShow] = useState(true);

    return (
        <section className="flex flex-col gap-2 transition">
            {
                text &&
                <button
                    className={"w-fit px-2 " + navBaseClass}
                    onClick={() => setIsShow(!isShow)}
                >
                    {text}
                </button>
            }
            <div className="flex flex-col gap-1">
            {isShow && children}
            </div>
        </section>
    )
}

export default function Nav({
    icon,
    children
}: {
    icon?: string,
    children?: React.ReactNode
}) {
    return (
        <button className={navBaseClass + "h-10 px-3 flex items-center gap-3"}>
            {
                icon && <Icon name={icon} size="lg" />
            }
            {children}
        </button>
    )
}