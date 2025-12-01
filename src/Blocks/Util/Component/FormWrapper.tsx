import type { ReactNode } from "react";



const FormWrapper = ({ children, count }: { children: ReactNode[], count: number }) => {

    return (
        <div className="min-h-[30vh] border">
            {children[count]}
        </div>
    );
};

export default FormWrapper;