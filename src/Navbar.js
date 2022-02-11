import React, {useState} from "react";
import logo from "./media/m.png"
import resume from "./media/resume.pdf"

function Navbar() {
    const [navOpen, setNavOpen] = useState(true);
  return (
        <div className="sticky p-3" style={{backgroundColor: "#343A40", position: "relative", top: 0}} id="navbar">
            <div className={`d-flex justify-content-between ${navOpen ? 'flex-column' : 'flex-row '}`}>
            <span className="d-flex align-items-center">
                <a href="/"><img src={logo} alt="m" className="mr-1" style={{width: "35px"}}/></a>
                <a href="/" className="text-brand my-auto" style={{textDecoration: "none"}}>Max Pinheiro</a>
            </span>
            <div className={navOpen ? "d-flex flex-column justify-content-center" : "nav-item"}>
                {
                    navOpen ?
                    <a href="javascript:void(0);" className="nav-icon text-white mr-auto ml-2" onClick={() => setNavOpen(false)}>
                        <i className="fa fa-times fa-2x"></i>
                    </a> :
                    <a href="javascript:void(0);" className="nav-icon text-white ml-auto" onClick={() => setNavOpen(true)}>
                        <i className="fa fa-bars fa-2x"></i>
                    </a>
                }
                <a href="/about" className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>about</a>
                <a href="/projects" className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>projects</a>
                <a href="/portfolio" className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>portfolio</a>
                <a href="https://github.com/maxpinheiro" className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">github</a>
                <a href={resume} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">resume</a>
                <a href="/contact" className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>contact</a>
            </div>
            </div>
        </div>
  );
}

export default Navbar;