import Header from "./components/Header";
import Sidebar from './components/Sidebar'
import Post from './components/Post'

//author: {avatar_url: "", name:"", role:""}
//publishedAt: date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/alysonbarreto02.png",
      name: "Alyson Kevin",
      role: "CEO"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2022-06-04 09:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/andersondias89.png",
      name: "Anderson Dias",
      role: "CEO 2"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Projeto do curso Ignite. Em desenvolvimento... 🚀' },
      { type: 'link', content: 'www.andinho.com' },
    ],
    publishedAt: new Date("2022-06-01 09:00:00")
  }
]

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-col">
          {posts.map((posts, key) => {

            return (
              <Post
                key = {`index-posts-list-${key}`}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
