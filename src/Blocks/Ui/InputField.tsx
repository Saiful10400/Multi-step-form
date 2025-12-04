import { useState, type ChangeEventHandler } from "react";
import updateProgressFn from "../Util/Function/updateProgress";




const InputField = ({ type, placeHolder, value, updaterFn, fieldName, errorMessage, updateProgressCount }: { updateProgressCount: (v: number) => void, errorMessage: string, type: string, fieldName: string, placeHolder: string, value: string, updaterFn: (key: string, value: string | number) => void }) => {

    const [error, setError] = useState<null | string>(null)
    const [clicked, setClicked] = useState<boolean>(false)
    const [UpdatedProgress, setProgressCountUpdated] = useState<boolean>(false)
    const onChangeHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e?.target?.value
        updaterFn(fieldName, value)

        // update error message.
        if (value === "" && clicked) setError(errorMessage)
        else {
            setError(null)
        }

        // update steps progress
        if (!UpdatedProgress) {
            updateProgressFn(updateProgressCount)
            setProgressCountUpdated(true)
        } else if (value === "" && UpdatedProgress) {
            setProgressCountUpdated(false)
            updateProgressCount(-100/12)
        }

    }


    return (
        <>
            <input onClick={() => setClicked(true)} className={`${error ? "border-red-500" : "border-gray-400"} w-full h-full text-white text-lg pl-2 py-2 rounded-md border-2 focus:outline-0`} type={type} placeholder={placeHolder} value={value} onChange={onChangeHandle} />
            <span className={`${error ? "opacity-100 duration-300" : "opacity-0"} text-red-400 font-semibold text-sm`}>{error}</span>
        </>
    );
};

export default InputField;