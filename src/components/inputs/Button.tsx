import Icon from "../built-in/Icon"

interface IButtonProps { 
    startIcon?: string,
    endIcon?: string,
    children?: React.ReactNode,
    loading?: boolean,
    disabled?: boolean,
    onClick?: () => void
}

export default function Button({ 
    startIcon,
    endIcon,
    children,
    loading,
    disabled = false,
    onClick,
}: IButtonProps) {
    let btnClass = " h-12 min-w-[80px] px-5 flex gap-3 justify-center items-center rounded-lg text-scream bg-greensea text-center text-lg font-semibold transition hover:opacity-90 ";
    if (disabled)
        btnClass += " saturate-50"

    return (
        <button
            className={btnClass}
            disabled={disabled}
            onClick={onClick}
        >
            {startIcon && <Icon name={startIcon} size="lg" />}
            {children}
            {endIcon && <Icon name={endIcon} size="lg" />}
        </button>
    )
}

interface IIconButtonProps {
    icon: string,
    size?: 'sm' | 'md' | 'lg' ,
    disabled?: boolean,
    onClick?: () => void
}
export function IconButton({
    icon,
    size = 'md',
    disabled = false,
    onClick,
}: IIconButtonProps) {
    let baseClass = " grid place-items-center rounded-full hover:bg-gray-200 transition ";
    return (
        <button
            className={baseClass + buttonSize[size]}
            disabled={disabled}
            onClick={onClick}
        >
            <Icon name={icon} size="xl" /> 
        </button>
    )
}

const buttonSize = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
}