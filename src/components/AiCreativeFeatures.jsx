import FeatureCard from "./FeatureCard.jsx";
import {BiMessageSquare} from "react-icons/bi";

export default function AiCreativeFeatures() {
    return (
        <div className={`flex flex-col justify-center align-middle gap-4`}>
            <BiMessageSquare size={50} className="p-3 text-[#B6F09C] bg-[#FFFFFF22] custom-shadow rounded-full mx-auto" />
            <h4 className={`text-2xl text-center font-bold`}>Content Creation</h4>
            <div className={`grid grid-cols-1 gap-4`}>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
            </div>
        </div>
    );
}

