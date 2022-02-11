import React from "react";

const textDecNone = {textDecoration: "none"};

function Contact() {
  return (
    <div className="container-fluid bg-steel-blue min-vh-100" id="contact">
        <div style={{height: "45%"}}></div>
        <div className="container py-2 bg-dark-gray" style={{width: "65%"}}>
            <p className="text-center text-header">contact</p>
            <div className="border-top w-25 mx-auto"></div>
            <div className="pt-4 pb-5 ml-2">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <a href="https://www.instagram.com/notmaxpinheiro/" className="text-white" style={textDecNone}>
                            <span className="row mx-auto d-flex">
                                <div className="rounded-circle border border-white px-2 py-1">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <p className="my-auto ml-3 text-white d-inline text-heading">notmaxpinheiro</p>
                            </span>
                        </a>
                        <a href="http://github.com/maxpinheiro" className="text-white" style={textDecNone}>
                            <span className="row mx-auto my-3 d-flex">
                                <div className="rounded-circle border border-white px-2 py-1">
                                    <i className="fab fa-github"></i>
                                </div>
                                <p className="my-auto ml-3 text-white d-inline text-heading">maxpinheiro</p>
                            </span>
                        </a>
                        <a href="mailto: pinheiro.m@northeastern.edu" className="text-white" style={textDecNone}>
                            <span className="row mx-auto my-3 d-flex">
                                <div className="rounded-circle border border-white px-2 py-1">
                                    <i className="far fa-at"></i>
                                </div>
                                <p className="my-auto ml-3 text-white d-inline text-heading">pinheiro.m@northeastern.edu</p>
                            </span>
                        </a>
                        <a href="https://www.linkedin.com/in/mpin" className="text-white" style={textDecNone}>
                            <span className="row mx-auto mb-3 d-flex">
                                <div className="rounded-circle border border-white px-2 py-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <p className="my-auto ml-3 text-white d-inline text-heading">Max Pinheiro</p>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;