import type { ChangeEventHandler } from "react";



const InputField = ({ type, placeHolder, value, updaterFn }: { type: string, placeHolder: string, value: string, updaterFn:(key:string,value:string|number)=>void }) => {
    return (
        <input className="w-full h-full text-white text-lg pl-1 py-1 rounded-md border-2 focus:outline-0" type={type} placeholder={placeHolder} value={value} onChange={e=>updaterFn(e?.target?.valuee)} />
    );
};

export default InputField;