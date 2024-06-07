import { HiSparkles } from "react-icons/hi";

function AiMessage({ message }) {
    return (
        <div className={`flex flex-row w-full gap-4`}>
            <div className={`flex-shrink-0`}>
                <HiSparkles size={50} className={`aspect-square p-2 rounded-full border-[1px] border-[#27272A] bg-black`}/>
            </div>
            <div className={`border-[1px] border-[#27272A] text-start flex-grow p-4 px-6 rounded-xl`}>
                {message}
            </div>
        </div>
    );
}

export default AiMessage;
