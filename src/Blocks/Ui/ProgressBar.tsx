

const ProgressBar = ({ progress }: { progress: number }) => {
    // const parentDivRef=useRef({offsetWidth:0})
    //     const[parentWidth,setParentWidth]=useState(0)
    //    useEffect(()=>{
    //     if(!parentDivRef)return
    //     setParentWidth(parentDivRef?.current.offsetWidth)
    //    },[])
    const arrow = <span className="w-5 h-5 bg-gray-300 rotate-45 -z-10 absolute -bottom-1 left-[calc(30px-50%)]" />
    return (
        <div className="min-h-2 border w-[70%] mx-auto mt-12 mb-5 relative rounded-lg">
            <span className=" bg-gray-300 px-2 py-1 text-xs font-bold rounded-sm absolute bottom-4 duration-300 min-w-10 text-center" style={{ right: `${(100 - progress) - 4}%` }}>{progress}% {arrow}</span>
            <span className="h-full bg-white absolute top-0 duration-300 rounded-lg" style={{ width: `${progress}%`, right: `${100 - progress}%` }} />
        </div>
    );
};

export default ProgressBar;