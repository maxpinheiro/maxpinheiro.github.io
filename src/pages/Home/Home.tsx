import React from "react";
import { useSelector } from "react-redux";
import Background from "./Background";
import background from "../../media/background.svg";
import { getBaseColor, getColorPalette, getTextTheme } from "../../store/Theme.store";
//import mobileBackground from "../media/mobile_background.svg";

const Home: React.FC = () => {
    const baseColor = useSelector(getBaseColor);
    const textClass = useSelector(getTextTheme);
    const palette = useSelector(getColorPalette);
    
    return (
        <div className={`full-page text-white`}>
            {/*<img src={background} style={{position:"fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1}} alt="background" className="" />*/}
            {/*<img src={mobileBackground} style={{position:"absolute", width: "100%", height: "100%"}} alt="background" className="mobile-only" />*/}
            <Background primary={palette.primary} secondary={palette.secondary} tertiary={palette.tertiary} quaternary={palette.quaternary} />
            <div className="full-page column-centered justify-center" >
                <div className="mx-auto">
                    <p className="text-center text-shadow-lg shadow-dark text-main my-3">max pinheiro</p>
                    <p className="text-center text-shadow-lg shadow-dark text-header">web developer</p>
                </div>
            </div>
        </div>
    );
}

export default Home;