import {IoArrowForwardSharp} from "react-icons/io5";

function FeatureCard() {
    return (
        <div className={`flex flex-row justify-between border-[1px] border-[#FFFFFF12] py-3 px-2 md:rounded-2xl rounded-xl bg-gradient-to-r from-[#ffffff33] to-[#CCEBEB11]`}>
            <p className={` text-white px-3`}>UI wireframe</p>
            <IoArrowForwardSharp size={32} />
        </div>
    );
}

export default FeatureCard;