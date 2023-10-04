import Icon from "../built-in/Icon";

interface ISearchBoxProps {
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    preProcessData?: (rawValue: string) => string,
    onSearch: () => void
}

export default function SearchBox({
    placeholder,
    value,
    onChange,
    onSearch,
    preProcessData
}: ISearchBoxProps) {
    function inputOnChange(rawValue: string) {
        let value = rawValue;
        if (preProcessData)
            value = preProcessData(rawValue);

        onChange(value);
    }

    return (
        <label className="w-full h-12 flex border border-dark-light rounded-md overflow-hidden">
            <input 
                className="w-full px-3"
                placeholder={placeholder}
                value={value}
                onChange={e => inputOnChange(e.target.value)}
            />
            <button
                className="flex-shrink-0 w-10 bg-scream"
                onClick={onSearch}>
                <Icon name="magnifying-glass" size="lg"/>
            </button>
        </label>
    )
}