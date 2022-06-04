import Comment from "./Comment"

export default function Post() {
    return (
        <div className=" w-full h-full  px-32 mt-8 ">
            <div className="w-full bg-box flex-col rounded-lg">
                <div className="w-full mx-4 flex">
                    <img className="w-16 h-16 rounded-md border-2 p-px my-5 border-green" src="https://avatars.githubusercontent.com/u/104519462?s=400&u=46823a1adc6bb40334b93ed68b3c447a1f35a485&v=4" />
                    <div className="flex-col my-auto ml-4 pr-96">
                        <h3 className="text-white text-sm">Alyson Kevin</h3>
                        <span className="text-xs text-text">Software Developer</span>
                    </div>
                    <p className="text-xs mr-auto ml-20 mt-5 text-text">Publicado há 1h</p>
                </div>
                <div className="mx-4 text-text pb-3 border-b border-line">
                    <p>Fala galeraa 👋</p>
                    <br />
                    <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀   
                    </p>
                    <br />
                    <a href="" className="text-green underline"> 👉 jane.design/doctorcare</a>
                    <br />
                     <a href="" className="text-green">#novoprojeto #nlw #rocketseat</a>
                </div>
                <div className="mx-4 my-5 flex-col">
                    <p className="text-text font-semibold">Deixe seu feedback</p>
                    <textarea name="" id="" cols="90" rows="4" className="my-8 bg-box border text-text border-green rounded-lg"></textarea>
                    <button className="mb-5 bg-green w-32 h-10 rounded-lg">
                        <p className="text-white">Publicar</p>
                    </button>
                </div>
            </div>
            <Comment />
        </div>
    )
}