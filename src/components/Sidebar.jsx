import { BsPencil } from "react-icons/bs";

export default function Aside() {
    return (
        <aside className="w-64 h-72 bg-box mt-8 ml-32 rounded-md flex-col">
            <img src='../../assets/folhas.png' alt="capa" className="w-64 h-16 rounded-t-md " />
            <div className="flex-col">
                <div className="w-full h-full flex-col justify-center">
                    <div className="">
                        <img className="w-16 h-16 mx-auto -mt-8 rounded-md border-2 p-px border-green" src="https://avatars.githubusercontent.com/u/104519462?s=400&u=46823a1adc6bb40334b93ed68b3c447a1f35a485&v=4" />
                    </div>
                    <div className="w-full flex my-2">
                        <h2 className='text-md text-white mx-auto'>Alyson Kevin</h2>
                    </div>
                    <div className="flex w-full">
                        <span className='text-xs mx-auto text-text'>Software Developer</span>
                    </div>
                    <div className="w-full border-b border-line mt-16"></div>
                    <button className="w-48 h-12 border-2 border-green mx-auto px-2 mt-3 rounded-md flex hover: hover:text-white transition-colors">
                        <a href="" className="text-sm flex ml-8 my-auto text-green">Editar seu perfil</a>
                        <div className="my-auto ml-2 text-green">
                            <BsPencil />
                        </div>
                    </button>
                </div>
            </div>
        </aside>
    )
}