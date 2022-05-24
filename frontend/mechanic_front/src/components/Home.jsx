/** @format */

import imgs from "../images/professionals.jpg";
import img from "../images/background.jpg";
import Services from "./Services"
function Home() {
  return (
    <div
      className='col '
      style={{ justifyContent: "center", width: "100%", marginTop: "1%" }}
    >
      <div className="container" >
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner '>
            <div className='carousel-item  active'>
              <img src={imgs} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3>First slide label</h3>
                <p>
                  You don't have to wait for your vehicle to get fixed, not a
                  problem. Our certified mechanics can get the job done in
                  minutes
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={imgs} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3>Second slide label</h3>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={img} className='d-block w-100' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h3>Third slide label</h3>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services/>
    </div>
  );
}
export default Home;
