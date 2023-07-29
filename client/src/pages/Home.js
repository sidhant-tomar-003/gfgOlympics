import React, { useEffect, useState } from 'react'




const Home = () => {

  const textOptions = ['Functional Front End', 'Back end','Charting', 'World map functionality','Database','Athlete bios'];

  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState(textOptions[textIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [textOptions.length]);

  useEffect(() => {
    setText(textOptions[textIndex]);
  }, [textIndex]);

  return (
    <>
      <section class="firstSection">
            <div class="leftSection">Hi this is our <span class="purple">Home page</span>
                <div> This is for our gfg hackathon</div>
                <div>We still require a:</div>

                <span id="element">
                  {text}
                </span>

            </div>
            <div class="rightSection">
                <img src="./assests/bg.jpg" alt="Dev image"/>
            </div>
        </section>
        <hr/>
    </>
  )
}

export default Home;
