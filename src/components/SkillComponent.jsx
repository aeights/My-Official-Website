import React from "react";

function SkillComponent({src, alt, title}) {
    return (
        <div className="w-24 h-24 cursor-pointer rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300">
            <img className="h-10" src={src} alt={alt} />
            <p className="text-xs text-primary-base">{title}</p>
        </div>
    );
}

export default SkillComponent;
