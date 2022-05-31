/** @format */

import { Route, Routes, useNavigate } from "react-router-dom";
import store from "../../store/store";
import Product from "./product";
import BookProduct from "./bookProduct.jsx"
import { useState, useEffect } from "react";


export default function Products(props) {
  const navigate = useNavigate();
  const name = props.services.name;
  const products = props.services.products;
  const [productBooking, setproductBooking] = useState()
  //   console.log(props);
  let p =null;
  return (
    <Routes>
      <Route
        path='/*'
        element={
          <div className='row w-100'>
            <div className='row w-100 justify-content-center mt-5'>
              <h2 className='border-bottom'>{name}</h2>
            </div>
            <div className='row m-3 w-100 bg-'>
              {products.map((product) => (
                <Product
                  key={product.id}
                  value={products[products.indexOf(product)]}
                  click={()=>click(product)}
                />
              ))}
            </div>
          </div>
        }
      />  
      <Route path='/service/product/*' element={<BookProduct value={productBooking}/>}/>
    </Routes>
  );
  function click(params) {
    p=params.name;
    console.log(params)
    setproductBooking(params);
    navigate('/services/service/product/'+p)
  }
}
