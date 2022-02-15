import React from "react";
import background from "../media/background.svg";
//import mobileBackground from "../media/mobile_background.svg";

function Home() {
  return (
    <div className="containter-fluid  bg-sea-green">
        <img src={background} style={{position:"absolute", width: "100%", height: "100%"}} alt="background" className="" />
        {/*<img src={mobileBackground} style={{position:"absolute", width: "100%", height: "100%"}} alt="background" className="mobile-only" />*/}
        <div className="d-flex flex-column align-items-center align-self-center my-auto">
            <div className="mx-auto top-45 sm-top-30">
                <p className="text-center text-main my-n2">max pinheiro</p>
                <p className="text-center text-header">web developer</p>
            </div>
        </div>
    </div>
  );
}

export default Home;