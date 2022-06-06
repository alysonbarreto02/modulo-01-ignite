import Comment from "./Comment"
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from "react"

export default function Post({ author, publishedAt, content }) {

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    })

    const [comments, setComments] = useState(["Muito massa! Show de bola!"])

    function moreComments(event){
        event.preventDefault();
        
        console.log(newComment)
      
        setComments([...comments, newComment])

        setNewComment("")
    } 

    const [newComment, setNewComment] = useState("")

    function showNewComment(event){
        setNewComment(event.target.value)
    }

    return (
        <div className=" w-full px-32 mt-8">
            <div className="w-full bg-box flex-col rounded-lg">
                <div className="w-full mx-4 flex">
                    <img className="w-16 h-16 rounded-md border-2 p-px my-5 border-green" src={author.avatarUrl} />
                    <div className="flex-col my-auto ml-4 pr-96">
                        <h3 className="text-white text-sm">{author.name}</h3>
                        <span className="text-xs text-text">{author.role}</span>
                    </div>
                    <time className="text-xs mr-auto ml-20 mt-5 text-text">
                        {publishedDateFormatted}
                    </time>
                </div>
                <div className="mx-4 text-text pb-3 border-b border-line">
                    {content.map((item, key) => {
                        if (item.type === 'paragraph') {
                            return <p key={`index-item-list-${key}`}>{item.content}</p>
                        } else if (item.type === "link") {
                            return <p key={`index-item-list-${key}`}><a href="" className="text-green underline">{item.content}</a></p>
                        }
                    }
                    )}
                </div>
                <div className="mx-4 my-5 flex-col">
                    <p className="text-text font-semibold">Deixe seu feedback</p>
                    
                    <form onSubmit={moreComments}>
                        <textarea 
                        onChange={showNewComment} 
                        value={newComment}
                        cols="90" 
                        rows="4" 
                        className="my-8 bg-box border text-text border-green rounded-lg"></textarea>
                        <button  type="submit" className="mb-5 bg-green w-32 h-10 rounded-lg text-white">
                            Publicar
                        </button>
                    </form>
                </div>
            </div>

            {comments.map((comments,index)=>{
                return <Comment
                content={comments}
                key={`lista-do-mapeamento-${index}`}/>
            }
            )}
        </div>
    )
}