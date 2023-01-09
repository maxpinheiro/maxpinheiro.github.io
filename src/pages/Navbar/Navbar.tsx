import React, {useState} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import resume from "../../media/resume.pdf";
import Modal from "react-modal";
import SettingsModal from "../Settings";
import { getBaseColor, getTextTheme } from "../../store/Theme.store";
import { MLogo } from "./Icons";

Modal.setAppElement("#root");

const links: {name: string, url: string, external: boolean}[] = [
    {name: "about", url: "/about", external: false},
    {name: "projects", url: "/projects", external: false},
    {name: "portfolio", url: "/portfolio", external: false},
    {name: "github", url: "https://github.com/maxpinheiro", external: true},
    {name: "resume", url: "https://maxpinheiro.github.io/static/media/resume.pdf", external: true},
    {name: "contact", url: "/contact", external: false}
];

const Navbar: React.FC = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [settingsModalOpen, setSettingsModalOpen] = useState(false);
    const textClass = useSelector(getTextTheme);
    const baseColor = useSelector(getBaseColor);

    return (
        <div className={`${mobileNavOpen ? 'fixed' : 'sticky' } top-0 w-100vw ${baseColor} ${textClass} py-3`} style={{zIndex: 10}} id="navbar">
            <div className={` mx-3 ${mobileNavOpen ? 'column' : 'row-between-centered '}`}>
                <div className="row-between-centered w-100">
                    <Link to="/" className="row align-center mx-bw-5 text-dec-none" onClick={() => setMobileNavOpen(false)}>
                        <MLogo color={textClass} />
                        <p className="text-heading my-auto desktop-only" >Max Pinheiro</p>
                    </Link>
                    <div className="mobile-only mx-bw-3 row align-center">
                        <p onClick={() => {setSettingsModalOpen(true); setMobileNavOpen(false)}} className="bi bi-gear text-icon my-0 row align-center" />
                        <div className={`menu${mobileNavOpen ? '-open' : ''}`} onClick={() => setMobileNavOpen(b => !b)}>
                            { [0, 1, 2].map(i => <div key={i} className={`bar bg-${textClass.split('text-')[1]}`} />)}
                        </div>
                    </div>
                </div>
                <div className={mobileNavOpen ? "column-centered justify-around py-4 min-h-75vh border-box" : "row align-center desktop-only mx-bw-2"}>
                    <Link to='/' className="mobile-only text-heading text-dec-none">home</Link>
                    {
                        links.map((link, idx) => (
                            link.external ? 
                            <a href={link.url} className=" text-heading text-dec-none" onClick={() => setMobileNavOpen(false)} target="_blank" rel="noopener noreferrer" key={idx}>{link.name}</a> :
                            <Link to={link.url} className=" text-heading text-dec-none" onClick={() => setMobileNavOpen(false)} key={idx}>{link.name}</Link>
                        ))
                    }
                    <i onClick={() => setSettingsModalOpen(true)} className="pointer bi bi-gear text-heading desktop-only" />
                </div>
            </div>
            <Modal isOpen={settingsModalOpen} onRequestClose={() => setSettingsModalOpen(false)}
                style={{overlay: {backgroundColor: 'rgba(255, 255, 255, 0.2)'}, content: {padding: '0px', top: '70px', left: '20px', right: '20px', bottom: '20px'}}} >
                <SettingsModal close={() => setSettingsModalOpen(false)} />
            </Modal>
        </div>
    );
}

export default Navbar;
