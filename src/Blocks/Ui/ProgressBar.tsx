 
const ProgressBar = ({progress}:{progress:number}) => {
    return (
        <div className="min-h-2 border w-[70%] mx-auto mt-4 mb-5 relative overflow-hidden">
           <span className="h-full bg-white absolute top-0 duration-300  w-full rounded-lg" style={{right:`-${progress*10}%`}}/>
        </div>
    );
};

export default ProgressBar;