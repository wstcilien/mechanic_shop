/** @format */
import img from "../../images/serviceImages"
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

export default function Service(props) {
  const navigate = useNavigate();
  // console.log(props)
    const index = props.value.imgURL;
    
  const productsText = getProducts(
    props.value.products
  );
  return (
      <div className='col-sm-4 col-md-3 col-lg-2 m-3 bg-dark'style={{"borderRadius":"10px"}}>
        <div className='w-100'>
          <img className="img-thumbnail mt-3" src={img[index]} alt='image of service' />
        </div>
        <div >
          <span className="badge badge-primary w-100 mt-3 p-2">{props.value.name}</span>
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
          <label className="border-bottom">Products:</label>
        </div>
        <div>
          <p style={{"fontSize":"12px"}}>{productsText}</p>
        </div>
        <div>
            <button onClick={()=>props.click(props)} className="btn btn-outline-success mb-3 w-100">Go To Products</button>
        </div>
      </div>
  );
  function toProductsPage(params) {

    console.log(params)
    navigate("/services/products/"+params)
  }
  function getProducts(params) {
    if(params){
      let products = "";
      if(params.length < 5){
        for (let index = 0; index < params.length; index++) {
          const element = params[index].name;
          if (index < params.length - 1) {
            products += element + ", ";
          } else {
            products += element;
          }
        }
      }else{
        for (let index = 0; index < 5; index++) {
          const element = params[index].name;
          if (index < params.length - 1) {
            products += element + ", ";
          } else {
            products += element;
          }
        }
        products += " ...";
      }
    return products;
    }
  }
}
