import Logo from "../components/navigation/Logo"
import Nav, { NavGroup } from "../components/navigation/Nav"

export default function Sidebar({
    children
}: {
    children?: React.ReactNode
}) {
    return (
        <aside className="w-76 h-screen flex flex-col border-r border-dashed">
            <div className="p-4">
                <Logo />
            </div>
            <nav className="grow px-2 flex flex-col gap-4 overflow-y-auto text-sm font-semibold">
                <Nav icon="magnifying-glass">Search</Nav>
                <NavGroup text="Recruitment">
                    <Nav icon="chart-simple">Recruitment Plans</Nav>
                    <Nav icon="newspaper">Recruitment Posts</Nav>
                    <Nav icon="user-tie">Candidates</Nav>
                    <Nav icon="comments">Interviews</Nav>
                </NavGroup>
                <NavGroup text="Management">
                    <Nav icon="user">Accounts</Nav> 
                    <Nav icon="chart-pie">Analysis</Nav> 
                </NavGroup>
                <NavGroup text="User">
                    <Nav icon="circle-user">Profile</Nav>
                    <Nav icon="key">Change password</Nav> 
                    <Nav icon="right-from-bracket">Log out</Nav> 
                </NavGroup>
            </nav>
        </aside>
    )
}
