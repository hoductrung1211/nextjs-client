import Sidebar from "@/src/layouts/Sidebar"

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}