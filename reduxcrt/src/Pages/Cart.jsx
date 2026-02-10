import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  checkout, removeFromcart,increment,decrement } from '../Redux/slices/cartSlice';
import { MdDelete } from "react-icons/md";


function Cart() {

  const cart = useSelector(state => state.cartReducer)

  const dispatch = useDispatch()

  return (
    <div className="container-fluid py-4">
      {
        cart?.length > 0 ?
          <>
            <div className="row">

              {/* Left Side: Cart Items */}
              <div className="col-12 col-lg-8">

                {/* Mobile View: Vertical Cards (Visible only on small screens) */}
                {
                  cart?.map(item => (
                    <div className="d-block d-md-none">
                      <div className="card shadow-sm mb-3 p-3">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={item.thumbnail}
                            style={{ width: '80px' }}
                            alt="product"
                          />
                          <div className="ms-3">
                            <h6 className="mb-0 fw-bold">{item.title}</h6>
                            <small className="text-muted">Unit Price: ${item.price}</small>
                          </div>
                          <button className="btn ms-auto text-danger">
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <button className="btn btn-sm btn-success px-3" onClick={()=>dispatch(increment(item.id))} >+</button>
                            <span className="mx-3 fw-bold">{item.quantity}</span>
                            <button className="btn btn-sm btn-danger px-3" onClick={()=>dispatch(decrement(item.id))}>-</button>
                          </div>
                          <div className="text-end">
                            <small className="d-block text-muted">Total</small>
                            <span className="fw-bold text-success">${item.price * item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }


                {/* Desktop View: Table (Hidden on small screens) */}
                <div className="d-none d-md-block table-responsive shadow-sm">
                  <table className='table table-bordered align-middle text-center'>
                    <thead className="table-light">
                      <tr>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cart?.map(item=>(
                          <tr>
                        <td className="fw-bold">{item.title}</td>
                        <td>
                          <img src={item.thumbnail} style={{ width: '80px' }} alt="product" />
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <button className="btn btn-sm btn-success" onClick={()=>dispatch(increment(item.id))} >+</button>
                            <input type="text" className="form-control form-control-sm mx-2 text-center" style={{ width: '40px' }} value={item.quantity} readOnly />
                            <button className="btn btn-sm btn-danger" onClick={()=>dispatch(decrement(item.id))} >-</button>
                          </div>
                        </td>
                        <td className="fw-bold text-success">${item.price * item.quantity}</td>
                        <td>
                          <button className='btn border-0'onClick={()=>{dispatch(removeFromcart(item.id))}} >
                            <MdDelete size={20} color='red'/>
                          </button>
                        </td>
                      </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Side: Summary Box */}
              <div className="col-12 col-lg-4 mt-4 mt-lg-0">
                <div className='p-4 border rounded shadow-sm bg-white'>
                  <h4 className="d-flex justify-content-between">
                    Total Products : <span className='text-info'>{cart?.length}</span>
                  </h4>
                  <hr />
                  <h4 className="d-flex justify-content-between mb-4 text-dark">
                    Total Price : 
                    <span className='text-success'>
                      {
                        cart?.reduce((prev,item)=>prev+(item.quantity*item.price),0)
                      }
                      </span>
                  </h4>
                  <div className='d-grid'>
                    <button className="btn btn-success btn-lg fw-bold shadow-sm" onClick={()=>{dispatch(checkout())}}>checkout</button>
                  </div>
                </div>
              </div>

            </div>
          </>
          :
          <h2 className="text-center text-danger">No item added into Your Cart !!</h2>
      }

    </div>
  );
}

export default Cart;