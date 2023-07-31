import { motion, AnimatePresence } from "framer-motion";
import {
  slideAnimation,
  headContainerAnimation,
} from '../config/motion';
import React from 'react'
import Map from '../components/Map';
import image from "./home.png"

const Home = () => {
  return (
    <AnimatePresence>
      <div className="container mt-5 ">
        <div className="row">
        
          <div className="col-md-6 d-flex flex-column justify-content-center" {...headContainerAnimation}>
            <h2 className="mb-3 texter-header-big" style={{ fontWeight: "Bold", display: "flex", justifyContent: "center"}}>Edge <span style={{ color: "#9C27B0" }}>Runners</span> </h2>
        
            <p className="texter">Welcome to Olympics Around the World! Our interactive world map provides an immersive experience, allowing you to navigate through the years and uncover the medal counts of countries across all Olympic events. Watch as the map dynamically updates with the latest medal data, giving you real-time insights into the current standings of the ongoing Olympic Games. 
            </p>
          </div>
          <motion.div className="col-md-6 pt-3 pb-5" {...slideAnimation('down')}>
            <img className="img-fluid" src={image} alt="olympics" />
          </motion.div>

        </div>
      </div>

      <div className="d-flex justify-content-center">
        <hr style={{ width: "500px", marginTop: '50px', height: "1px", backgroundColor: "grey" }} />
      </div>
      <Map />
    </AnimatePresence>
  )
}

export default Home;
