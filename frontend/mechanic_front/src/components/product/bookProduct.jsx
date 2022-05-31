/** @format */

import { useState } from "react";
import images from "../../images/productImages";
import ReactStars from "react-rating-stars-component";
import { isEditable } from "@testing-library/user-event/dist/utils";

export default function BookProduct(props) {
  console.log(props, "booking page");
  const product = props.value;
  const comments = useState(product.comments);
  const [currentTen, setcurrentTen] = useState([]);
  if(comments.length>10){

      for (let index = 0; index < comments.length; index++) {
          setcurrentTen(... currentTen.push(comments[index]))
          
      }
  }

  const index = product.imgURL;
  const name = product.name;
  const price = product.price;
  const rating = product.rating;
  const description = props.description;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const placeHolderText =
    "Please share with us your experience. Tell us what you like and dislike about the service.";
  return (
    <div className='col mt-5 w-100'>
      <div className='row'>
        <div className='col-md-6 col-lg-6 col-sm-12'>
          <img
            className='border'
            src={images[index]}
            style={{ borderRadius: "2%" }}
            width='100%'
            alt='picture of the product'
          />
        </div>
        <div className='col-md-6 col-lg-6 col-sm-12'>
          <h2 className='w-100 align-item-center'>{name}</h2>
          <div>
            <h3>Price Range: {price}</h3>
          </div>
          <div>
            <ReactStars
              count={5}
              value={3.75}
              edit={false}
              size={35}
              half={true}
              activeColor='#ffd700'
            />
          </div>
          <div className='flex-fill'>
            <h4>Description:</h4>
            <textarea className='w-75' type={"text"} disabled>
              {description}
            </textarea>
          </div>
          <button className='btn btn-outline-success mt-3'>Get A Quote</button>
        </div>
      </div>
      <div className='mt-3'>
        <div>
          <h3>Leave A Comment</h3>
        </div>
        <div>
          <ReactStars
            count={5}
            value={rating}
            size={35}
            onChange={ratingChanged}
            activeColor='#ffd700'
          />
        </div>
        <div>
          <textarea
            className='w-75'
            type={"text"}
            placeholder={placeHolderText}
          ></textarea>
        </div>
        <button className='btn btn-outline-primary'>Post Comment</button>
      </div>
    </div>
  );
}
