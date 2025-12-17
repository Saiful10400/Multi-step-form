import { motion } from "motion/react"
import { useEffect, useState } from "react";

const FrammerMotion = () => {
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth-20)
    useEffect(() => {
        const callBack = () => {
            setInnerWidth(window.innerWidth)
        }
        window.addEventListener("resize", callBack)
        return () => window.removeEventListener("resize", callBack)
    }, [])
    console.log(window.innerWidth)
    return (
        <div style={{width:innerWidth}} className={` h-[400px] border border-white box-border`}>
            <motion.div drag dragConstraints={{ left: 0, top: 0, right: innerWidth-200 }} initial={{ borderRadius: 32 }} whileDrag={{ borderRadius: 100 }} className="bg-fuchsia-700 w-[200px] box-border h-[200px]">

            </motion.div>
        </div>
    );
};

export default FrammerMotion;



// animate={{x:[0,500,500,0,0], y:[0,0,300,300,0], rotate:[0,360,-360,360,0]}}

// while[], transition, animation, initial,drag,dragconstrain