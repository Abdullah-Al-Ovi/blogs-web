const removeFromCart=(cart,blog)=>{
    // console.log(cart,blog);
  const index = cart.findIndex(item=>item.id === blog.id);
  
  if(index !== -1){
    cart.splice(index,1);
  }
//   console.log(index);
  return cart
}
export default removeFromCart