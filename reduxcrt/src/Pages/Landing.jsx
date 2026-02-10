import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchproductThunk,prevpage,nextpage } from '../Redux/slices/productslices';
import { useDispatch, useSelector } from 'react-redux';
import { addtowishlist } from '../Redux/slices/WishlistSlice';
import { addtocart } from '../Redux/slices/cartSlice';

function Landingpage() {
  const dispatch = useDispatch();

  const { products, pending, error ,currentpage} = useSelector((state) => state.productReducer);
const prodperpage=10
const totpage=(products?.length)/prodperpage
const endindex=currentpage*prodperpage
const startindex=endindex-prodperpage
 
  useEffect(() => {
    dispatch(fetchproductThunk());
  }, [dispatch]);
const nextpagenavigate=()=>{
  if(currentpage<totpage){
    dispatch(nextpage())
  }
}

const prevpagenavigate=()=>{
  if(currentpage>1){
    dispatch(prevpage())
  }
}
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop homepage template
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">

          {pending ? (
            <h2 className="text-center">Loading...</h2>
          ) : error ? (
            <h2 className="text-center text-danger">{error}</h2>
          ) : (
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {products &&
              products
  .slice(startindex, endindex)   // slice the array first
  .map((item) => (               // then map over the sliced items
    <div className="col mb-5" key={item.id}>
      <div className="card h-100">
        <Link to={`details/${item.id}`}>
          <img
            className="card-img-top"
            src={item.thumbnail}
            alt={item.title}
          />
        </Link>


                      <div className="card-body p-4">
                        <div className="text-center">
                          <h5 className="fw-bolder">
                            {item.title.slice(0, 12)}...
                          </h5>
                          ${item.price}
                        </div>
                      </div>

                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between">
                        <button
                          className="btn"
                          onClick={() => dispatch(addtowishlist(item))}
                        >
                          <i
                            className="fa-solid fa-heart"
                            style={{ color: '#930c27' }}
                          ></i>
                        </button>

                        <button className="btn"
                        onClick={()=> dispatch(addtocart(item))}>
                          
                          <i
                            className="fa-solid fa-cart-arrow-down"
                            style={{ color: '#55d71d' }}
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

        </div>
      </section>

      <div className="my-3 d-flex justify-content-center">
        <div className="d-flex gap-3">
          <button className="btn">
            <i className="fa-solid fa-angles-left" onClick={prevpagenavigate} style={{ color: '#55d71d' }}></i>
          </button>

          <span>{currentpage}/{totpage}</span>

          <button className="btn">
            <i className="fa-solid fa-angles-right"onClick={nextpagenavigate} style={{ color: '#55d71d' }}></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
