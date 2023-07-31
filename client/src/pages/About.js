import { motion, AnimatePresence } from "framer-motion";
import {
  slideAnimation,
  headContentAnimation,
  headContainerAnimation,
} from '../config/motion';

import React from 'react'
import image from "./image.jpg";

function About() {
    return (
        <AnimatePresence>
        <div style={{ marginTop: "30px" }}>
            {/* text-white */}
            <div className=" aboutImg text-center">
                <div className="note-img me-3">
                <motion.section {...slideAnimation("top")}>
                    <h2 className="mb-3 mt-4" style={{ fontWeight: "Bold", fontSize: "35px" }}>About <span style={{ color: "#9C27B0" }}>Us</span> </h2>
                </motion.section>
                <motion.div {...headContentAnimation}>
                    <p className='texter'>Welcome to Olympic Medals World Map, a passion project born out of our love for sports, history, and the spirit of global competition. Our team of dedicated enthusiasts came together to create a one-of-a-kind platform that allows you to explore the rich and storied history of the Olympic Games in a captivating and interactive way.</p>
                </motion.div>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                    <motion.div {...headContentAnimation}>
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Why We Built<span style={{ color: "#9C27B0" }}> This Platform</span> </h2>
                        <p className='texter'>The idea behind Olympic Medals World Map was sparked by our desire to provide a comprehensive and visually captivating way for enthusiasts like you to relive the Olympic journey. Our interactive map not only displays medal counts but also tells the remarkable stories of triumph, perseverance, and sportsmanship that have defined the Games for more than a century.
                        </p>
                        </motion.div>
                    </div>
                    <motion.div className="col-md-6" {...slideAnimation('down')}>
                        <img className="img-fluid" style={{ padding: "30px" }} src={image} alt="olympics" />
                    </motion.div>
                </div>
            </div>

            <div className="d-flex justify-content-center">
                <hr style={{ width: "500px", marginTop: '50px', height: "1px", backgroundColor: "grey" }} />
            </div>
            <motion.div {...headContentAnimation}>
            <h2 className="mb-3" style={{ fontWeight: "Bold", display: "flex", justifyContent: "center", marginTop: "20px" }}>Made <span style={{ color: "#9C27B0" }}>By</span> </h2>
            <p className="texter" style={{ display: "flex", justifyContent: "center"}}>@EdgeRunners</p>
            </motion.div >
            <motion.div {...headContainerAnimation}className="m-4" style={{ display: "flex", justifyContent: "space-between", padding: "2px 20px" }}>
                <div style={{display:"flex", flexDirection:"column" ,justifyContent:"center",fontWeight:"bold", alignItems:"center", border:"3px dashed grey", padding:"20px 60px", backgroundColor:"#f0dcf0", color:"black", borderRadius:"10px"}}>
                    <a href="https://github.com/ThapaVinay" target="_blank" rel="noreferrer" style={{ color: 'black', fontSize: '40px', padding: '0px' }}><i className="fa fa-github"></i></a>
                    <p style={{ fontFamily: "'Source Code Pro', monospace" }}>Vinay </p>
                </div>
                <div style={{display:"flex", flexDirection:"column" ,justifyContent:"center", fontWeight:"bold",alignItems:"center" , border:"3px dashed grey", padding:"20px 60px", backgroundColor:"#f0dcf0", color:"black", borderRadius:"10px"}}>
                    <a href="https://github.com/H-SM" target="_blank" rel="noreferrer" style={{ color: 'black', fontSize: '40px', padding: '0px' }}><i className="fa fa-github"></i></a>
                    <p style={{ fontFamily: "'Source Code Pro', monospace" }}>Harman </p>
                </div>
                <div style={{display:"flex", flexDirection:"column" ,justifyContent:"center", fontWeight:"bold",alignItems:"center" , border:"3px dashed grey", padding:"20px 60px", backgroundColor:"#f0dcf0", color:"black", borderRadius:"10px"}}>
                    <a href="https://github.com/Sid-the-Slothh" target="_blank" rel="noreferrer" style={{ color: 'black', fontSize: '40px', padding: '0px' }}><i className="fa fa-github"></i></a>
                    <p style={{ fontFamily: "'Source Code Pro', monospace" }}>Sid </p>
                </div>
            </motion.div>
        </div>
        </AnimatePresence>
    )
}

export default About