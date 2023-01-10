import React from "react";
import { useSelector } from "react-redux";
import { getBaseColor, getContactBackground, getTextTheme } from "../store/Theme.store";

const textDecNone = {textDecoration: "none"};

const links: {link: string, name: string, icon: string}[] = [
    {link: "mailto: pinheiro.m@northeastern.edu", name: "pinheiro.m@northeastern.edu", 
        //icon: "fa fa-envelope"},
        icon: "bi bi-envelope"},
    {link: "https://www.linkedin.com/in/mpin", name: "Max Pinheiro", 
        icon: "fab fa-linkedin-in"},
        //icon: "bi bi-linkedin"},
    {link: "https://www.instagram.com/notmaxpinheiro/", name: "notmaxpinheiro", 
        //icon: "fab fa-instagram"},
        icon: "bi bi-instagram"},
    {link: "http://github.com/maxpinheiro", name: "maxpinheiro", 
        //icon: "fab fa-github"}
        icon: "bi bi-github"}
];

const Contact: React.FC = () => {
    const backgroundClass = useSelector(getContactBackground);
    const baseColor = useSelector(getBaseColor);
    const textClass = useSelector(getTextTheme);

    return (
        <div className={`column-centered align-center full-page ${backgroundClass} ${textClass}`} id="contact">
            <p className={`text-center text-header border-bottom border-${textClass.split('text-')[1]} px-3 my-3`}>contact</p>
            <p className="text-center mx-3">Whether it's a question, comment, concern, project idea, business inquiry, trivia question, or anything else, I'd love to chat!</p>
            <div className={`column-centered ${baseColor} rounded-md py-2 px-5 mt-5`} >
                    <div className="d-flex column-centered justify-center">
                        <div>
                            {
                                links.map(({link, name, icon}, idx) => (
                                    <div key={idx}>
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="" style={textDecNone}>
                                            <span className="row align-center mx-auto my-3">
                                                <div className="rounded-circle">
                                                    <i className={icon} />
                                                </div>
                                                <p className="my-auto mx-3 text-contact">{name}</p>
                                            </span>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Contact;