
interface IErrorTextProps {
    children?: React.ReactNode
}
export default function ErrorText({
    children
}: IErrorTextProps) {
    return (
        <p className="pl-3  text-red-500">
            {children}
        </p>
    )
}