import { HTMLInputTypeAttribute, useState } from "react"
import Icon from "../built-in/Icon"

interface ITextFieldProps {
    icon?: string,
    value: string,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    isError?: boolean,
    onChange: (value: string) => void,
}

const inputClassName = "w-full h-12";

export default function TextField({
    icon = '',
    value,
    placeholder,
    type = "text",
    isError = false,
    onChange,
}: ITextFieldProps) {

    let input = <input
                    className={inputClassName}
                    placeholder={placeholder ?? ''}
                    type={type}
                    value={value}
                    onChange={e => onChange(e.target.value)}
                />
    if (type == "password") 
        input =
            <PasswordInput  
                placeholder={placeholder ?? ''}
                type={type}
                value={value} 
                onChange={onChange}
            />

    let labelClass = "flex px-4 border bg-scream rounded-lg overflow-hidden";
    if (isError === true)
        labelClass += " border-red-500"
    else labelClass += " border-concrete";
    
    return (
        <label className={labelClass}>
            {
                icon &&
                <span className="shrink-0 w-9 pr-3 grid place-items-center">
                    <Icon name={icon + ''} size="lg"/>
                </span>
            }
            {input}
        </label>
    )
}
 

function PasswordInput({
    value,
    placeholder, 
    onChange
}: ITextFieldProps) {
    const [type, setType] = useState<HTMLInputTypeAttribute>("password");
    
    return (
        <>
            <input
                className={inputClassName}
                placeholder={placeholder ?? ''}
                type={type}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            <button
                className="w-14 rounded-full hover:bg-grey"
                onClick={() => setType(type == "password" ? "text" : "password")}>
                {
                    type == "password" ?
                        <Icon name="eye-slash" size="lg" /> :
                        <Icon name="eye" size="lg" />
                }
            </button>
        </>
    ) 
}