import Logo from "@/src/components/navigation/Logo";
import Link from "next/link";
import { leftNavigation, rightNavigation } from "@/src/utils/config/headerNavigation";

export default function Header({

}) { 
    return (
        <header className="sticky top-0 inset-x-0 bg-grey">
            <div className="flex justify-between w-[1200px] h-14 mx-auto px-3 leading-14">
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
    return (
        <nav className="flex gap-10">
        {
            rightNavigation.map(link => 
                <Link href={link.href}>
                    {link.text}
                </Link>    
            )
        }
        </nav>
    )
}