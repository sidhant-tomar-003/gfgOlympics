import { motion, AnimatePresence } from "framer-motion";
import {
  headContentAnimation
} from '../config/motion';
import React from 'react'
import { Button, TextField } from '@mui/material';

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div {...headContentAnimation} class="about-section" id="contact_us0" >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 className="mb-3 mt-4" style={{ fontWeight: "Bold" }}>Contact <span style={{ color: "#9C27B0" }}>Us</span> </h2>        </div>
        <div style={{margin:"20px 70px", padding:"0px 50px"}}>
          <form action="mailto:thechampthapa@gmail.com" method="post" enctype="text/plain">
            <div class="description-former righter-form">
              <div className="mb-5">
                <p className='container' style={{ marginBottom: "6px" }}>Name</p>
                <TextField variant="outlined" color="secondary" type="text" name="sname" placeholder="Enter your name" style={{ background: "white", borderRadius: "5px"}} fullWidth />
              </div>

              <div className="mb-4">
                <p className='container' style={{ marginBottom: "6px" }}>Subject</p>
                <TextField variant="outlined" color="secondary" multiline rows={5} name="ssubject" placeholder="Related subject of issue" style={{ background: "white", borderRadius: "5px" }} fullWidth />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }} className="pt-4">
              <Button size="large" variant="contained" color="secondary" type="submit" value="Send" style={{borderRadius:"15px"}}> Send </Button>
            </div>
          </form>
        </div>
      </motion.div>
      <hr style={{marginTop:"45px"}}/>
    </AnimatePresence>
  )
}

export default Contact;
