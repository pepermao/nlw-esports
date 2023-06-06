import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputModal = (props: InputProps) => {
    return (
        <input
            className="placeholder:text-zinc-500 px-4 py-3 bg-zinc-900 rounded text-xs text-zinc-500 h-[50px]"
            {...props}
        />
    )
}

export default InputModal