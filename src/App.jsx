import Header from "./components/Header";
import Sidebar from './components/Sidebar'
import Post from './components/Post'

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Post />
      </div>
    </>
  )
}

export default App
