 
import type { TformData } from "../Storage/FormData";
import InputField from "../Ui/InputField";

 

const PersonalInfo = ({updaterFn,formData,updateProgressCount}:{updateProgressCount:(v:number)=>void,formData:TformData,updaterFn:(key: string, value: string | number) => void}) => {

 
  
    return (
        <div  className="grid grid-cols-2 gap-3">
           <InputField updateProgressCount={updateProgressCount} errorMessage="Your full name is missing!" fieldName="fullName" updaterFn={updaterFn}  type="text" value={formData["fullName"]} placeHolder="Your Name" />
           <InputField updateProgressCount={updateProgressCount} errorMessage="Your email missing!" fieldName="email" updaterFn={updaterFn}  type="email" value={formData["email"]} placeHolder="Your E-mail" />
           <InputField updateProgressCount={updateProgressCount} errorMessage="Your phone number is missing!" fieldName="phone" updaterFn={updaterFn}  type="number" value={formData["phone"]} placeHolder="Your Phone number" />
           <InputField updateProgressCount={updateProgressCount} errorMessage="Your date of birth is missing!" fieldName="dob" updaterFn={updaterFn}  type="date" value={formData["dob"]} placeHolder="Your Date of birth" />
        </div>
    );
};

export default PersonalInfo;