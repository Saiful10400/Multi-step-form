

const Tittle = ({ stepCount }: { stepCount: number }) => {

    const stepsName = ["Personal Info", "Address", "Payment Info"]

    return <h1 className="text-center text-2xl text-white">{stepsName[stepCount]}</h1>

};

export default Tittle;