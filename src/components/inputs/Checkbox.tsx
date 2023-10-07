
interface ICheckboxProps {
    checked?: boolean,
    text: string,
    onChange?: (value: boolean) => void
}

export default function Checkbox({
    checked = false,
    text,
    onChange = () => {}
}: ICheckboxProps) {
    return (
        <label className="flex gap-2 items-center font-medium cursor-pointer">
            <input
                className="w-5 h-5 accent-greensea cursor-pointer"
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
            />
            {text}
        </label>
    )
}