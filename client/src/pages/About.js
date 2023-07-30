import React from 'react'
import image from "./image.jpg";

function About() {
    return (
        <div style={{ marginTop: "30px" }}>
            <div className="text-white aboutImg text-center">
                <div className="note-img me-3">
                    <h1 className="display-4">Skellington Website</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium eligendi voluptatem delectus, ad cumque? Sequi, ullam quas! Consequatur commodi quae, possimus similique repellendus assumenda omnis temporibus amet cupiditate unde ad eum.</p>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Why use <span style={{ color: "#9C27B0" }}>our website?</span> </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus inventore ullam sunt, exercitationem dignissimos est neque illum, sint molestiae similique quibusdam, blanditiis nemo eius. Dolor assumenda, labore quibusdam, dolore quo illum architecto ipsa, recusandae quasi placeat voluptate sapiente.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" style={{padding:"30px"}} src={image} alt="olympics" />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <hr style={{ width: "500px", marginTop: '50px', height: "3px", backgroundColor: "grey" }} />
            </div>

            <h2 style={{ fontWeight: "bold", display: "flex", justifyContent: "center", marginTop: "20px" }}>Made By</h2>
            <p style={{display:"flex", justifyContent:"center"}}>@Edge Runners</p>

        </div>
    )
}

export default About