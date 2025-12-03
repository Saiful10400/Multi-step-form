 import type { TformData } from "../Storage/FormData";
import InputField from "../Ui/InputField";

 

const PersonalInfo = ({updaterFn,formData}:{formData:TformData,updaterFn:(key: string, value: string | number) => void}) => {

  
    return (
        <div>
           <InputField fieldName="fullName" updaterFn={updaterFn}  type="text" value={formData["fullName"]} placeHolder="Your Name" />
        </div>
    );
};

export default PersonalInfo;