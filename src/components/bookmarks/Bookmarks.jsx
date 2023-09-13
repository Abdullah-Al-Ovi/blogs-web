import PropTypes from 'prop-types'

const Bookmarks = ({cart,time}) => {
    return (
        <div className="w-[35%] ">
            <div className=" bg-[#6047ec1a] rounded-md border-2 p-3 mb-5 text-center ">
                <h2 className=" text-lg font-semibold text-[#6047EC]">Spent time on read : {time} min </h2>
                </div>
            <div className=" bg-[#1111110D] rounded-md py-4 p-4 ">
                <h2 className=" text-lg mb-5 font-semibold ">Bookmarked blogs : {cart.length}</h2>
                {
                   cart.map((item,id)=>{
                    return (
                        <div className=" bg-[#FFF] rounded-md mb-3 p-3 " key={id} ><h2>{item.title}</h2></div>
                    )
                   }) 
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    cart: PropTypes.array.isRequired,
    time: PropTypes.number.isRequired
}
export default Bookmarks;