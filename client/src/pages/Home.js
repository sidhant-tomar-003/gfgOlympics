import React from 'react'
import Map from '../components/Map';

const Home = () => {
  return (
    <>
      <section class="firstSection">
            <div class="leftSection">Hi this is our <span class="purple">Home page</span>
                <div> This is for our gfg hackathon</div>
                <div>We still require a:</div>

                <span id="element">
                  ayo
                </span>

            </div>
            <div class="rightSection">
                <img src="./assests/bg.jpg" alt="Dev image"/>
            </div>
        </section>
        <hr/>

      <Map/>
    </>
  )
}

export default Home;
