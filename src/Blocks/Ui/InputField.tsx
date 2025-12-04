import { useContext, useState, type ChangeEventHandler } from "react";
import updateProgressFn from "../Util/Function/updateProgress";
import FormContext from "../Util/Function/ContextInt";




const InputField = ({ type, placeHolder, value, updaterFn, fieldName, errorMessage, updateProgressCount }: { updateProgressCount: (v: number) => void, errorMessage: string, type: string, fieldName: string, placeHolder: string, value: string, updaterFn: (key: string, value: string | number) => void }) => {

    const unWantedValue = [""]
    const WhiteSpaceDetectRegx = /^\s+/;
    const context=useContext(FormContext)
    const [error, setError] = useState<null | string>(null)
    const [clicked, setClicked] = useState<boolean>(false)
   


    const handleErrorMessage = (InputValue: string) => {
        if (unWantedValue.includes(InputValue) && clicked) setError(errorMessage)
        else {
            setError(null)
        }
    }

    const handleStepProgress = (InputValue: string) => {
        if (!context?.ValidatedField.includes(fieldName)) {
            updateProgressFn(updateProgressCount)
            context?.setValidatedField(p=>([...p,fieldName]))
        } else if (unWantedValue.includes(InputValue) && context.ValidatedField.includes(fieldName)) {
            context.setValidatedField(p=>(p.filter(i=>i!==fieldName)))
            updateProgressCount(-100 / 12)
        }
    }

    const onChangeHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
        const InputValue = e?.target?.value
        if (WhiteSpaceDetectRegx.test(InputValue)) return

        updaterFn(fieldName, InputValue)

        // update error message.
        handleErrorMessage(InputValue)

        // update steps progress
        handleStepProgress(InputValue)

    }

 

    return (
        <section>
            <input onClick={() => setClicked(true)} className={`${error ? "border-red-500" : "border-gray-400"} w-full   text-white text-lg pl-2 py-2 rounded-md border-2 focus:outline-0`} type={type} placeholder={placeHolder} value={value} onChange={onChangeHandle} />
            <span className={`${error ? "opacity-100 duration-300" : "opacity-0"} text-red-400 font-semibold text-sm`}>{error}</span>
        </section>
    );
};

export default InputField;