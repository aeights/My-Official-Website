import React from "react";

function SkillComponent(props) {
    const {imageUrl, imageAlt, imageTitle} = props;
    return (
        <div className="w-24 h-24 rounded-md bg-quinary-base mx-6 flex flex-col justify-evenly items-center hover:shadow-[3px_3px_10px_rgba(0,0,0,0.5)] duration-300">
            <img className="h-10" src={imageUrl} alt={imageAlt} />
            <p className="text-xs text-primary-base">{imageTitle}</p>
        </div>
    );
}

export default SkillComponent;
