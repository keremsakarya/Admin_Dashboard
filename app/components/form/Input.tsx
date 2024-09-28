type Props = {
    item: {
        label: string
        name: string
        type?: string
    }
    value?: string
}

const Input = ({ item, value }: Props) => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={item.name} className="font-semibold">
                {item.label}
            </label>

            <input
                id={item.name}
                type={item.type}
                name={item.name}
                defaultValue={value || ""}
                className="shadow rounded-lg py-1 px-3"
            />
        </div>
    )
}

export default Input