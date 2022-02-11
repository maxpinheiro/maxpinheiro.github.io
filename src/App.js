import React from "react";
import background from "./media/background.svg";

function App() {
  return (
    <div className="containter-fluid  bg-sea-green">
        <img src={background} style={{position:"absolute", width: "100%", height: "100%"}} alt="background" />
        <div className="d-flex flex-column align-items-center align-self-center my-auto">
            <div className="mx-auto" style={{position:"absolute", top:"30%"}}>
                <p className="text-center text-main my-n2">max pinheiro</p>
                <p className="text-center text-header">web developer</p>
            </div>
        </div>
    </div>
  );
}

export default App;