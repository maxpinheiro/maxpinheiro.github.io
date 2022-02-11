import React, {useState} from "react";
import {descriptions} from "./media/projects";

const classes = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(-1);
    const [cardColors, setCardColors] = useState(descriptions.map(() => classes[Math.floor(Math.random() * classes.length)]));

    const setColors = () => {
        const cardClasses = descriptions.map(() => classes[Math.floor(Math.random() * classes.length)])
        setCardColors(cardClasses)
    }


    return (
        <div className="container-fluid min-vh-100 bg-steel-blue" id="projects">
            <div style={{height: "7%"}}></div>
            <div className="container py-2">
                <div className="row d-flex justify-content-center align-items-baseline">
                    <p className="text-center text-header mr-3">projects</p>
                    <i className="fas fa-sync-alt fa-2x text-white ml-3" style={{cursor:"pointer"}} onClick={() => setColors()}></i>
                </div>
                
                <div className="border-top w-25 mx-auto"></div>

                {
                    selectedProject === -1 ?
                    <div id="project-list" className="row mt-4 text-center text-heading">
                        {
                            descriptions.map((project, idx) => 
                            <div className="col-md-6 col-lg-4" onClick={() => setSelectedProject(idx)} key={idx}>
                                <div className={`card-bubble card-md ${cardColors[idx] || 'card-1'} my-3 d-flex justify-content-center align-items-center`} style={{cursor: "pointer"}} id={`card${idx+1}`}>
                                    <p className="h3 mt-2 text-medium">{project.title}</p>
                                </div>
                            </div>)
                        }
                    </div> :
                    <div id="selected-project" className={`row border-20 mt-4 ${cardColors[selectedProject]}`}>
                        <div className="container p-50-20 mt-4 mx-4 position-relative">
                            <button className="top-left-corner mt-3 btn text-white" onClick={() => setSelectedProject(-1)}><i className="fas fa-times fa-2x"></i></button>
                            <p className="text-center mt-2 text-medium" id="project-title">{descriptions[selectedProject].title || ""}</p>
                            <p className="text-description line-height-150 my-3 mx-5 px-2" id="project-description">{descriptions[selectedProject].description || ""}</p>
                        </div>
                    </div>
                }

                
            </div>
        </div>
    );
}

export default Projects;