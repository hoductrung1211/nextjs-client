export interface INavigation {
    id?: number,
    text: string,
    icon?: string,
    children?: INavigation[],
    href?: string,
    onClick?: () => void
}

export const managerNavigations: INavigation[] = [
    // {
    //     text: "Search",
    //     icon: "magnifying-glass"
    // },
    {
        text: "Recruitment",
        children: [
            {
                id: 1,
                text: "Recruitment Plans",
                icon: "chart-simple",
            },
            {
                id: 2,
                text: "Recruitment Posts",
                icon: "newspaper",
            },
            {
                id: 3,
                text: "Candidates",
                icon: "user-tie",
            },
            {
                id: 4,
                text: "Interviews",
                icon: "comments",
            },
        ]
    },
    {
        text: "Management",
        children: [
            {
                id: 5,
                text: "Accounts",
                icon: "user",
            },
            {
                id: 6,
                text: "Analysis",
                icon: "chart-pie",
            }, 
        ]
    },
    {
        text: "User",
        children: [
            {
                id: 7,
                text: "Profile",
                icon: "circle-user",
            },
            {
                id: 8,
                text: "Change password",
                icon: "key",
                href: "/change-password",
            },
            {
                id: 9,
                text: "Log out",
                icon: "right-from-bracket",
                onClick: () => alert("Log out")
            },
        ]
    },
]