import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "./media/m.png"
import resume from "./media/resume.pdf"

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
  return (
        <div className="sticky p-3" style={{backgroundColor: "#343A40", position: "relative", top: 0, zIndex: 1}} id="navbar">
            <div className={`d-flex justify-content-between ${navOpen ? 'flex-column' : 'flex-row '}`}>
                <span className="d-flex align-items-center">
                    <a href="/"><img src={logo} alt="m" className="mr-1" style={{width: "35px"}}/></a>
                    <a href="/" className="text-brand my-auto" style={{textDecoration: "none"}}>Max Pinheiro</a>
                </span>
                <div className={navOpen ? "d-flex flex-column justify-content-center" : "nav-item"}>
                    {
                        navOpen ?
                        <a className="nav-icon text-white mr-auto ml-2" onClick={() => setNavOpen(false)}>
                            <i className="fa fa-times fa-2x"></i>
                        </a> :
                        <a className="nav-icon text-white ml-auto" onClick={() => setNavOpen(true)}>
                            <i className="fa fa-bars fa-2x"></i>
                        </a>
                    }
                    {navOpen && <Link to="/" onClick={() => setNavOpen(false)} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>home</Link>}
                    <Link to="/about" onClick={() => setNavOpen(false)} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>about</Link>
                    <Link to="/projects" onClick={() => setNavOpen(false)} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>projects</Link>
                    <Link to="/portfolio" onClick={() => setNavOpen(false)} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>portfolio</Link>
                    <a href="https://github.com/maxpinheiro" onClick={() => setNavOpen(false)} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">github</a>
                    <a href={resume} onClick={() => setNavOpen(false)} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">resume</a>
                    <Link to="/contact" onClick={() => setNavOpen(false)} className=" text-heading mx-2 my-auto" style={{textDecoration: "none"}}>contact</Link>
                </div>
            </div>
        </div>
  );
}

export default Navbar;