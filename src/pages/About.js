import React from "react";
import { Link } from "react-router-dom";
import profile from "../media/profile.png";

function About() {
  return (
    <div className="container-fluid min-vh-100 bg-dark-sea-green">
    <img src="media/aboutme_bg.svg" style={{display: "none", position:"absolute", width: "100%", height: "100%"}} alt="background" />
    <div className="container py-5">
        <span className="row mb-3">
            <div className="col-lg-4 d-flex justify-content-center">
                <img src={profile} alt="profile" className="img-fluid rounded-circle border border-dark shadow-lg mt-4" style={{width: "250px", height: "250px"}}/>
            </div>
            <div className="col-lg-8">
              <p className="text-center text-header">about me</p>
              <div className="border-top my-3 w-50 mx-auto"></div>
              <p className="text-about text-white mt-4">Hi, I'm Max! I'm a software developer currently studying at Northeastern University, pursuing a BS in Computer Science with a concentration in Artificial Intelligence and a minor in Interaction Design. I consider myself flexible to all fields of software dev, but I take particular interest in web development and artificial intelligence. I also have a passion for graphic design and visual arts: check out a small portfolio <Link to="/portfolio" style={{textDecoration: "underline", color: "white"}}>here</Link>.</p>
            </div>
        </span>
        <p className="text-center text-medium">my skills</p>
        <div className="row mb-4"> 
            <div className="col-lg">
                <p className="text-center text-title bg-secondary-50">front-end dev</p>
                {/* <i className="fab fa-html5 fa-3x text-white mx-2"></i>
                <i className="fab fa-css3 fa-3x text-white mx-2"></i>
                <i className="fab fa-js fa-3x text-white mx-2"></i>
                <i className="fab fa-react fa-3x text-white mx-2"></i>
                <i className="fab fa-angular fa-3x text-white mx-2"></i> */}
                <p className="text-white text-about"> HTML | CSS | JS | Typescript | React/Redux | Angular | JQuery | Bootstrap/Tailwind</p>
            </div>
            <div className="col-lg">
                <p className="text-center text-title bg-secondary-50">back-end dev</p>
                {/*<i className="fab fa-node-js fa-3x text-white mx-2"></i>
                <i className="fab fa-angular fa-3x text-white mx-2"></i> */}
                <p className="text-white text-about">Node | Express | PHP | MongoDB/Mongoose | MySQL | JPA | Spring Boot</p>
            </div>
            <div className="col-lg">
                <p className="text-center text-title bg-secondary-50">machine learning</p>
                {/*<i className="fab fa-python fa-3x text-white mx-2"></i>*/}
                <p className="text-white text-about">Python | PyTorch | TensorFlow | Scikit-learn | Pandas | Numpy | R | ml.js</p>
            </div>
            <div className="col-lg">
                <p className="text-center text-title bg-secondary-50">misc.</p>
                {/*<i className="fab fa-java fa-3x text-white mx-2"></i>
                <i className="fab fa-git fa-3x text-white mx-2"></i>
                <i className="fab fa-ad fa-3x text-white mx-2"></i> */}
                <p className="text-white text-about">Java | Racket | LateX | Git | JetBrains IDE | VS Code | Eclipse | Photoshop | Illustrator</p>
            </div>
        </div>
    </div>
</div>
  );
}

export default About;