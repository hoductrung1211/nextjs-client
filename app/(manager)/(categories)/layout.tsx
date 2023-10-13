'use client';
import { managerNavigations } from "@/src/config/sidebarNavigation"
import Sidebar from "@/src/layouts/Sidebar"
import GenerateNav from "@/src/layouts/GenerateNav"

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex">
            <Sidebar> 
                <GenerateNav node={managerNavigations} />
            </Sidebar>
            {children}
        </div>
    )
}