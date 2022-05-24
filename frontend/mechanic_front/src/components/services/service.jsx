/** @format */
import img from "../../images/image"
import ReactStars from "react-rating-stars-component";
export default function Service(props) {
    const index = props.value.imgURL;
    
  const productsText = getProducts(
    props.value.products
  );
  return (
      <div className='col-sm-4 col-md-2 m-3 bg-dark'>
        <div className='w-100'>
          <img className="img-thumbnail mt-3" src={img[index]} alt='image of service' />
        </div>
        <div >
          <span className="">{props.value.name}</span>
        </div>
        <div >
          <ReactStars
            count={5}
            value={props.value.rating}
            edit={false}
            activeColor='#ffd700'
          />
        </div>
        <div>
          <p style={{"fontSize":"12px"}}>{productsText}</p>
        </div>
        <div>
            <button className="btn btn-outline-success mb-3 w-100">Checkout Service</button>
        </div>
      </div>
  );
  function getProducts(params) {
    if(params){
      let products = "";
    for (let index = 0; index < params.length; index++) {
      const element = params[index];
      if (index < params.length - 1) {
        products += element + ", ";
      } else {
        products += element;
      }
    }
    return products;
    }
  }
}
