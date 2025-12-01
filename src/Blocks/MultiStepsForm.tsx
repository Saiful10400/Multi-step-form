import { useState } from "react";
import Address from "./Component/Address";
import Payment from "./Component/Payment";
import PersonalInfo from "./Component/PersonalInfo";
import "./Styles/MultiStepsForm.css"
import FormWrapper from "./Util/Component/FormWrapper";
import Button from "./Ui/Button";
import ProgressBar from "./Ui/ProgressBar";
import Tittle from "./Ui/Tittle";

const MultiStepsForm = () => {
    const [stepCount, setStepCount] = useState(0)
const[progressCount,setProgressCount]=useState(0)
    // increase counter.
    const increaseCounter = () => {
        setProgressCount(p=>p+10)
        if (stepCount === 2) return
        setStepCount(p => p += 1)
    }
    // decrease counter.
    const decreaseCounter = () => {
        if (stepCount === 0) return
        setStepCount(p => p -= 1)
    }


    return (
        <div className="MultiStepsFormContainer min-h-[50vh] w-[40vw] py-5 px-5">

            {/* Step tittle */}
            <Tittle stepCount={stepCount} />

            {/* progress bar. */}
            <ProgressBar progress={progressCount} />

            {/* Form pages. */}
            <FormWrapper count={stepCount}>
                <Address />
                <Payment />
                <PersonalInfo />
            </FormWrapper>

            {/* tauggleing buttons. */}
            <section className="flex items-center justify-between mt-4 px-4">
                <Button fn={decreaseCounter} text="Prev" />
                <Button fn={increaseCounter} text="Next" />
            </section>
        </div>
    );
};

export default MultiStepsForm;