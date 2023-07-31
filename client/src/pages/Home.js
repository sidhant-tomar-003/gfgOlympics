import React from 'react'
import Map from '../components/Map';
import image from "./home.png"

const Home = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-3" style={{ fontWeight: "Bold", display: "flex", justifyContent: "center" }}>Edge <span style={{ color: "#9C27B0" }}>Runners</span> </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus inventore ullam sunt, exercitationem dignissimos est neque illum, sint molestiae similique quibusdam, blanditiis nemo eius. Dolor assumenda, labore quibusdam, dolore quo illum architecto ipsa, recusandae quasi placeat voluptate sapiente.
            </p>
          </div>
          <div className="col-md-6 pt-3 pb-5">
            <img className="img-fluid" src={image} alt="olympics" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "500px", marginTop: '50px', height: "1px", backgroundColor: "grey" }} />
      </div>
      <Map />
    </>
  )
}

export default Home;
