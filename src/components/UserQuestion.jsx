import {TfiUser} from "react-icons/tfi";
import {FaRegEdit} from "react-icons/fa";
import Avatar from "../assets/Avatar.svg";

function UserQuestion({question}) {
    return (
        <div className={`flex flex-row w-full gap-3`}>
            <div className={``}>
                <div className={`aspect-square rounded-full border-[1px] w-[4em] bg-cover bg-center border-[#27272A] bg-black`} style={{backgroundImage:`url(${Avatar})`}}></div>
            </div>
            <div className={`bg-[#09090B] w-[60%] border-[#27272A] p-4 px-6 rounded-xl`}>
                {question}
            </div>
            <div className={``}>
                <FaRegEdit size={55} className={`aspect-square rounded-md p-4 border-[1px] border-[#27272A] bg-transparent`}/>
            </div>
        </div>
    );
}

export default UserQuestion;