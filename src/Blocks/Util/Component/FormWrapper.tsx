import type { ReactNode } from "react";



const FormWrapper = ({ children, count }: { children: ReactNode[], count: number }) => {

    return (
        <div className="min-h-[40vh] border">
            {children[count]}
        </div>
    );
};

export default FormWrapper;