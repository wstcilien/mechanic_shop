

import img from "../../../images/image"
import ReactStars from "react-rating-stars-component";

export default function Product(params) {
    console.log(params.value)
    const product = params.value;
    const index = product.imgURL;
    const name = product.name;
    const rating = product.rating;
    const price = product.price;
    
    return(<div className='col-sm-3 col-md-3 col-lg-2 m-3 bg-dark'style={{"borderRadius":"10px"}}>
    <div className='w-100'>
      <img className="img-thumbnail mt-3" src={img[index]} alt='image of service' />
    </div>
    <div >
      <span className="badge badge-success w-100 mt-3 p-2">{name}</span>
    </div>
    <div >
      <ReactStars
        count={5}
        value={rating}
        edit={false}
        activeColor='#ffd700'
      />
    </div>
    <div>
      <label className="w-100">Price Range:<p style={{"fontSize":"12px"}}>{price}</p></label>
    </div>
    <div>
        <button onClick={()=>params.click(params)} className="btn btn-outline-success mb-3 w-100">Book Product</button>
    </div>
  </div>)
  
}