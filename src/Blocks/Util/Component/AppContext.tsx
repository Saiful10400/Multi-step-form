import type React from "react";
import FormContext from "../Function/ContextInt";
import { useState } from "react";


const AppContext = ({ children }: { children: React.ReactElement }) => {


   

    const [ValidatedField, setValidatedField] = useState<string[]>([])

    const value = {
        ValidatedField, setValidatedField
    }


    return (
        <FormContext value={value}>
            {children}
        </FormContext>
    );
};

export default AppContext;