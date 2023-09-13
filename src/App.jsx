
import './App.css'
import Blogs from './components/blogs/Blogs'
// import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
 

  return (
    <>

     <Header></Header>
     {/* <div className='flex justify-between'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
     </div> */}
     <Blogs></Blogs>
      
    </>
  )
}

export default App
