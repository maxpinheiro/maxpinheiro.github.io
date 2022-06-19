import React, {useState} from "react";
import {descriptions} from "../media/projects";

const classes = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

function ProjectsNew() {
    const [selectedProject, setSelectedProject] = useState(-1);
    const [cardShape, setCardShape] = useState('card-bubble')
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
                    <i className="fas fa-sync-alt fa-2x text-white ml-3 pointer" onClick={() => setColors()}></i>
                    
                </div>
                
                <div className="border-top w-25 mx-auto mb-3 "></div>

                <div className="d-flex mx-auto justify-content-center">
                    <i className={`fas fa-square fa-2x ${cardShape === 'card-bubble' ? 'text-white' : 'greyed-out'} ml-3 pointer`} onClick={() => setCardShape('card-bubble')}></i>
                    <i className={`fas fa-circle fa-2x ${cardShape === 'card-circle' ? 'text-white' : 'greyed-out'} ml-3 pointer`} onClick={() => setCardShape('card-circle')}></i>
                </div>

                {
                    selectedProject === -1 ?
                    <div id="project-list" className="row my-5 text-center text-heading">
                        {
                            descriptions.map((project, idx) => 
                            <div className="col-6 col-lg-4" onClick={() => setSelectedProject(idx)} key={idx}>
                                <div className={`pointer ${cardShape || 'card-bubble'} ${cardColors[idx] || 'card-1'} my-3 px-1 d-flex justify-content-center align-items-center`} id={`card${idx+1}`}>
                                    <p className="h3 mt-2 text-medium text-22 md-text-35">{project.title}</p>
                                </div>
                            </div>)
                        }
                    </div> :
                    <div id="selected-project" className={`row border-20 mt-4 ${cardColors[selectedProject]}`}>
                        <div className="container p-50-20 mt-2 mx-2 position-relative">
                            <button className="top-left-corner btn text-white" onClick={() => setSelectedProject(-1)}><i className="fas fa-times fa-2x"></i></button>
                            <p className="text-center text-medium" id="project-title">{descriptions[selectedProject].title || ""}</p>
                            <p className="text-about line-height-150 my-3 mx-2" id="project-description" dangerouslySetInnerHTML={{__html: descriptions[selectedProject].description || ""}}></p>
                        </div>
                    </div>
                }

                
            </div>
        </div>
    );
}

export default ProjectsNew;