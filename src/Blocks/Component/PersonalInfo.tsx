import type { ChangeEventHandler } from "react";
import InputField from "../Ui/InputField";

 

const PersonalInfo = ({updaterFn}:{updaterFn:ChangeEventHandler<HTMLInputElement>}) => {
    return (
        <div>
           <InputField changeFn={updaterFn} type="text" value="saiful" placeHolder="Your Name" />
        </div>
    );
};

export default PersonalInfo;