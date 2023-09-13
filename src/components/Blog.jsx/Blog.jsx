import PropTypes from 'prop-types'
import profile from "../../assets/images/profile.png"

const Blog = ({blog,handleAdd,handleTimeAdd,handleRemove}) => {
    const {title,author,author_img,posted_date,reading_time,hashtags}=blog;
    return (
        <div className=" mb-7">
            <img src={author_img} />
            <div className="flex justify-between my-2">
                <div className="flex gap-2">
                    <div><img src={profile}/></div>
                    <div>
                        <h3 className="text-lg font-bold">{author}</h3>
                        <p className="">{posted_date}</p>
                    </div>
                </div>
                <div><p><span>{reading_time}</span> min read <span onClick={()=>handleAdd(blog)}><i className="fa-regular fa-bookmark"></i></span></p></div>
            </div>
            <h2 className="text-xl font-bold my-2">{title}</h2>
            {
                hashtags.map((hashtag,id)=><span key={id} className="mr-2">{hashtag}</span>)
            }
            <br />
            <button onClick={()=>{handleRemove(blog);handleTimeAdd(blog)}}    className="p-2 rounded  font-semibold mt-2 bg-yellow-800 text-white">Make as read</button>
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleTimeAdd: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    // handleTimeSub: PropTypes.func.isRequired
}
export default Blog;