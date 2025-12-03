import type { ReactNode } from "react";



const FormWrapper = ({ children, count }: { children: ReactNode[], count: number }) => {

    return (
        <div className="min-h-[30vh]">
            {children[count]}
        </div>
    );
};

export default FormWrapper;