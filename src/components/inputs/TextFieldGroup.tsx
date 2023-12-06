import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import TextField from "./TextField";
import ErrorText from "../feedback/ErrorText";

interface ITextFieldGroupProps {
    icon?: string,
    name?: string,
    value: string,
    placeholder?: string,
    type?: HTMLInputTypeAttribute,
    onChange: (value: string) => void,

    title?: string,
    errorText?: string
}

export default function TextFieldGroup({
    icon,
    value,
    name,
    placeholder,
    type,
    onChange,
    title,
    errorText
}: ITextFieldGroupProps) {
    const [error, setError] = useState(errorText);
    
    useEffect(() => { 
        if (error != errorText)
            setError(errorText);
    }, [errorText]);
    
    // middleware
    function inputOnChange(value: string) {
        setError("");
        onChange(value);
    }

    return (
        <div className="flex flex-col">
            {title && <h4 className="font-medium">{title}</h4>}
            <TextField
                icon={icon}
                name={name}
                value={value}
                placeholder={placeholder}
                type={type}
                isError={errorText ? true : false}
                onChange={inputOnChange}
            />
            {error && <ErrorText>{errorText}</ErrorText>}
        </div>
    )   
}