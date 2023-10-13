import Image from "next/image"
import Logo from "../components/navigation/Logo"

export default function Sidebar({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <aside className="w-76 h-screen flex flex-col border-r border-dashed">
            <div className="p-4 flex flex-col gap-4">
                <Logo />
            </div>
            <nav className="grow px-2 pb-6 flex flex-col gap-4 overflow-y-auto text-sm font-semibold">
                <section className="px-3 py-1 flex items-center gap-4 rounded-md text-dark-light hover:bg-slate-200 cursor-pointer ">
                    <div className="relative w-12 h-12 rounded-full border overflow-hidden bg-scream">
                        <Image
                            className="object-contain p-1.5"
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png"}
                            alt=""
                            fill
                        />
                    </div>
                    <p>Ho Duc Trung</p>
                </section>
                {children}
            </nav>
        </aside>
    )
}
