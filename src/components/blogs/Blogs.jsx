import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog.jsx/Blog";
import Bookmarks from "../bookmarks/Bookmarks";
import removeFromCart from "../../utils/util";


const Blogs = () => {
    const[blogs,setBlogs]=useState([])
    const [cart,setCart]=useState([])
    const [spentTime,setSpentTime]=useState(0)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    const handleAdd =(blog)=>{
        // console.log('cliked');
        const newCart =[...cart,blog];
        setCart(newCart)

    }
    const handleRemove=(blog)=>{
        console.log(cart);
        const newCart = removeFromCart(cart,blog)
        setCart(newCart);
        // console.log(newCart);
    }
    const handleTimeAdd=(blog)=>{
        const newTime = spentTime + blog.reading_time
        setSpentTime(newTime)

    }
    // const handleTimeSub=(blog)=>{
    //     const newTime = spentTime - blog.reading_time
    //     setSpentTime(newTime)

    // }
    return (
       <div className='flex justify-between'>
         <div className="w-[60%] ">
            {
                blogs.map((blog,id) =><Blog 
                    key={id}
                    blog={blog}
                    handleAdd={handleAdd}
                    handleTimeAdd={handleTimeAdd}
                    handleRemove={handleRemove}
                    // handleTimeSub={handleTimeSub}
                    ></Blog>)
            }
        </div>
      
        <Bookmarks cart={cart} time={spentTime}></Bookmarks>
       
       </div>
    );
};

export default Blogs;