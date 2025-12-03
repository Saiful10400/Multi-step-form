import { useState, type ChangeEventHandler } from "react";




const InputField = ({ type, placeHolder, value, updaterFn, fieldName }: { type: string, fieldName: string, placeHolder: string, value: string, updaterFn: (key: string, value: string | number) => void }) => {

    const [error, setError] = useState<null | string>(null)
    const [clicked, setClicked] = useState<boolean>(false)
    const onChangeHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e?.target?.value
        updaterFn(fieldName, value)

        if (value === "" && clicked) setError("Your full name missing!")
        else {
            setError(null)
        }
    }


    return (
        <>
            <input onClick={() => setClicked(true)} className={`${error ? "border-red-500" : "border-white"} w-full h-full text-white text-lg pl-1 py-1 rounded-md border-2 focus:outline-0`} type={type} placeholder={placeHolder} value={value} onChange={onChangeHandle} />
            <span className={`${error ? "opacity-100 duration-300" : "opacity-0"} text-red-400 font-semibold text-sm`}>{error}</span>
        </>
    );
};

export default InputField;