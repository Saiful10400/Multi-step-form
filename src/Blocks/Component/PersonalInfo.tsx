 import type { TformData } from "../Storage/FormData";
import InputField from "../Ui/InputField";

 

const PersonalInfo = ({updaterFn,formData,updateProgressCount}:{updateProgressCount:(v:number)=>void,formData:TformData,updaterFn:(key: string, value: string | number) => void}) => {

  
    return (
        <div className="grid grid-cols-2 gap-3">
           <InputField updateProgressCount={updateProgressCount} errorMessage="Your full name missing!" fieldName="fullName" updaterFn={updaterFn}  type="text" value={formData["fullName"]} placeHolder="Your Name" />
        </div>
    );
};

export default PersonalInfo;