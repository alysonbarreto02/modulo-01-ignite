import { FcLike } from "react-icons/fc";
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Comment({content}){
    return (
        <div className="mt-3">
            <div className="flex items-start space-x-2 relative">
                <div className='absolute right-2 top-2 text-gray-600 hover:text-red-800 cursor-pointer'><RiDeleteBin6Line /></div>
                <img className="w-8 rounded-md" src="https://avatars.githubusercontent.com/u/104519462?s=400&u=46823a1adc6bb40334b93ed68b3c447a1f35a485&v=4" alt="" />
                <div className="bg-line flex-1 rounded-lg p-2 flex flex-col">
                    <span className="text-xs text-text">Alyson Kevin (você)</span>
                    <span className="text-xs text-gray-600">Cerca de 2h</span>
                    <p className="text-sm mt-2 text-text">{content}</p>
                </div>
            </div>

            <div className='flex items-center space-x-1 text-xs text-gray-600 mt-1 ml-12'>
                <FcLike />
                <a className='hover:text-green' href="#"><span>Aplaudir</span></a>
                <span>•</span>
                <span>03</span>
            </div>
        </div>
    )
}
