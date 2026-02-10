import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removefromwish } from '../Redux/slices/WishlistSlice'

function Wishlist() {

  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch= useDispatch()

  return (
    <>
      <section className="py-5" style={{ minHeight: '65vh' }}>
        <div className="container px-4 px-lg-5 mt-5">

          {wishlist?.length > 0 ? (
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

              {wishlist.map(item => (
                <div className="col mb-5" key={item.id}>
                  <div className="card h-100">

                    <Link to={`/details/${item.id}`}>
                      <img
                        className="card-img-top"
                        src={item.thumbnail}
                        alt={item.title}
                      />
                    </Link>

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{item.title}</h5>
                        ${item.price}
                      </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                      <button className="btn" onClick={()=>{dispatch(removefromwish(item.id))}}>
                        <i
                          className="fa-solid fa-heart-circle-xmark"
                          style={{ color: "#db1f61" }}
                        ></i>
                      </button>

                      <button className="btn">
                        <i
                          className="fa-solid fa-cart-arrow-down"
                          style={{ color: "#55d71d" }}
                        ></i>
                      </button>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="w-100">
              <h2 className="text-center text-danger">
                No item added yet !!!
              </h2>
            </div>
          )}

        </div>
      </section>
    </>
  )
}

export default Wishlist