import Nav, { NavGroup } from "@/src/components/navigation/Nav";
import { INavigation } from "@/src/config/sidebarNavigation";

export default function GenerateNav({
    node,
}: {
    node: INavigation | INavigation[],
}) {
    if (Array.isArray(node)) {
        return (
            <>
                {node.map(subNode => <GenerateNav key={subNode.text} node={subNode} />)}
            </>
        );
    }

    if (node.children != undefined)
        return (
            <NavGroup text={node.text}>
                <GenerateNav node={node.children} />
            </NavGroup>
        );
    
    return (
        <Nav
            id={node.id ?? -1}
            icon={node.icon}
            href={node.href}
            onClick={node.onClick}
        >
            {node.text}
        </Nav>
    )
}