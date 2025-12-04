import { createContext, type Dispatch, type SetStateAction } from "react";

type TformContext={
ValidatedField:string[];
setValidatedField:Dispatch<SetStateAction<string[]>>
}

const FormContext=createContext<TformContext|null>(null)

export default FormContext