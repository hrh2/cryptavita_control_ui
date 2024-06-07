import {FaCode} from "react-icons/fa";
import FeatureCard from "./FeatureCard.jsx";

function AiDeveloperTools() {
    return (
        <div className={`flex flex-col justify-center align-middle gap-4`}>
            <FaCode size={50} className="p-3 mx-auto text-[#B6F09C] bg-[#FFFFFF22] custom-shadow rounded-full"/>
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

export default AiDeveloperTools;