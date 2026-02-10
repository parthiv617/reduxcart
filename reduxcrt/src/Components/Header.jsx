import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { filterprod } from '../Redux/slices/productslices'
import { addtocart } from '../Redux/slices/cartSlice'
function Header() {
    const dispatch = useDispatch();
      // const { products } = useSelector();
      const wishlist = useSelector(state=>state.wishlistReducer)
      const cartlist = useSelector(state=>state.cartReducer)
    
  return (
    <div>
      <>
{/* Navigation */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container px-4 px-lg-5">
    <Link className="navbar-brand" to={'/'} href="#!">
      ReduxCart
    </Link>
   <input type="text" className="form-control w-50 " placeholder="Search here" onChange={(e) => dispatch(filterprod(e.target.value))}></input>


    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     

      <form className=" d-flex justify-content-evenly ms-auto gap-3">
        <Link className="btn btn-outline-dark " to={'cart'} type="submit">
          <i className="fa-solid fa-cart-arrow-down" style={{color: '#2064d9'}}></i>
          Cart
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {cartlist?.length}
          </span>
        </Link>
                <Link className="btn btn-outline-dark" to={'wishlist'} type="submit">
      <i className="fa-solid fa-heart" style={{ color: "#ff0059" }}></i>

          Wishlist
          <span className="badge bg-dark text-white ms-1 rounded-pill">
            {wishlist?.length}
          </span>
        </Link>
      </form>
    </div>
  </div>
</nav>

      </>
    </div>
  )
}

export default Header
