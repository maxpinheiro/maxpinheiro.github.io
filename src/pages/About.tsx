import React from "react";
import { Link } from "react-router-dom";
import profile from "../media/profile.png";
import { useSelector } from "react-redux";
import { getAboutBackground, getTextTheme } from "../store/Theme.store";

const skills: {title: string, entries: string}[] = [
    {title: "front-end dev", entries: "HTML | CSS | JS | Typescript | React/Redux | Angular | JQuery | Bootstrap/Tailwind"},
    {title: "back-end dev", entries: "Node | Express | PHP | MongoDB | MySQL | JPA | Spring Boot"},
    {title: "machine learning", entries: "Python | PyTorch | TensorFlow | Scikit-learn | Pandas | Numpy | R | ml.js"},
    {title: "misc.", entries: "Java | Racket | LateX | Git | JetBrains IDE | VS Code | Eclipse | Photoshop | Illustrator"}
];

const About: React.FC = () => {
    const backgroundClass = useSelector(getAboutBackground);
    const textClass = useSelector(getTextTheme);

    const Skills = () => (
        <>
        <div className="row-center align-center border-bottom border-white px-3">
            {/*<p className="text-center text-medium my-3">my skills</p>*/}
            <p className="text-center text-medium my-3">technical skills</p>
        </div>
        <div className="row wrap my-4">
            {
                skills.map(({title, entries}, idx) => (
                    <div className="col-12 col-lg-3" key={idx}>
                        <div className="mx-3">
                            <p className="text-center text-title py-1 bg-secondary-50">{title}</p>
                            <p className="text-about mx-1">{entries}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </>   
    )

    return (
        <div className={`full-page ${backgroundClass} ${textClass}`}>
            <div className="column-centered">
                <div className={`row-center align-center border-bottom border-${textClass.split('text-')[1]} px-3`}>
                    <p className="text-center text-header my-3">about me</p>
                </div>
                <span className="row wrap align-center">
                    <div className="col-12 col-lg-4 column-centered">
                        <img src={profile} alt="profile" className="img-fluid rounded-circle border border-dark hover-border-white shadow-lg mt-4 lg-m-0" 
                            style={{width: "250px", height: "250px"}}
                        />
                    </div>
                    <div className="column-centered col-12 col-lg-8">
                        <p className="text-about text-justify line-height-150 lg-line-height-200 mx-5 lg-pr-6">
                            Hi, I'm Max! I'm a software developer currently studying at Northeastern University, 
                            pursuing a BS in Computer Science with a concentration in Artificial Intelligence and a 
                            minor in Interaction Design. I consider myself flexible to all fields of software dev, but 
                            I take particular interest in web development and artificial intelligence.
                            Above all else, I wish to use my skills to make a positive impact, whether it be for myself, a community, or the world.
                        </p>
                        <p className="text-about text-justify line-height-150 lg-line-height-200 mx-5 lg-pr-6">
                            In addition to software development, I am also pursuing graphic design. My combined passion for
                            graphic design and computer science drive me to build creative and meaningful user interfaces. 
                            Check out a small collection of my artwork <Link to="/portfolio" style={{textDecoration: "underline"}}>here</Link>.
                        </p>
                    </div>
                </span>
                <Skills />
            </div>
        </div>
    );
}

export default About;
