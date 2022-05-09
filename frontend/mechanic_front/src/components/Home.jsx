/** @format */

import imgs from "../images/proffesionals.jpg";
import img from "../images/background.jpg";
function Home() {
  return (
    <div
      className='col '
      style={{ justifyContent: "center", width: "100%", marginTop: "2%" }}
    >
      <div className='container' style={{ justifyContent: "center" }}>
        <div
          id='carouselExampleCaptions'
          class='carousel slide'
          data-bs-ride='carousel'
        >
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img src={imgs} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h3>First slide label</h3>
                <p>
                  You don't have to wait for your vehicle to get fixed, not a
                  problem. Our certified mechanics can get the job done in
                  minutes
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={imgs} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h3>Second slide label</h3>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img src={img} class='d-block w-100' alt='...' />
              <div class='carousel-caption d-none d-md-block'>
                <h3>Third slide label</h3>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row' style={{ justifyContent: "center" }}>
        <h1 style={{ color: "white" }}>Services</h1>
      </div>
    </div>
  );
}
export default Home;
