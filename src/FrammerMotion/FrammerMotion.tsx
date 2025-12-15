import { motion } from "motion/react"

const FrammerMotion = () => {
    return (
        <motion.div animate={{x:700, y:-200, rotate:270}} transition={{delay:1,duration:3}} className="bg-fuchsia-700 w-[200px] h-[200px] rounded-4xl">
             
        </motion.div>
    );
};

export default FrammerMotion;