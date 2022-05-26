/** @format */

import store from "../../../store/store";
import Product from "./product";
export default function Products(props) {
  const name = props.services.name;
  const products = props.services.products;
//   console.log(props);

  return (
    <div className='row w-100'>
      <div className='row w-100 justify-content-center mt-5'>
        <h2 className='border-bottom'>{name}</h2>
      </div>
      <div className='row m-3 w-100 bg-'>
        {products.map((product) => (
          <Product
            key={product.id}
            value={products[products.indexOf(product)]}
            click={() => props.click(product)}
          />
        ))}
      </div>
    </div>
  );
  function click(params) {
      
  }
}
