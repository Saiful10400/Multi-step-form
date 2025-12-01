import type { MouseEventHandler } from "react";

 

const Button = ({text,fn}:{text:string,fn:MouseEventHandler<HTMLButtonElement>}) => {
    return (
       <button className="text-lg font-medium bg-linear-to-r from-[#f700d6] to-[#c802ff] duration-100 hover:text-gray-200 hover:from-[#3a0032] hover:to-[#260031] text-white px-4 py-2 rounded-lg cursor-pointer" onClick={fn}>{text}</button>
    );
};

export default Button;