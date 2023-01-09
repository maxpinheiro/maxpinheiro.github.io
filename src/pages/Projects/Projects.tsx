import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {descriptions} from "../../media/projects";
import { getCardClasses, getCardShape, getProjectsBackground, getTextTheme, setCardShape } from "../../store/Theme.store";
import ProjectDetails from "./ProjectDetails";
import ProjectList from "./ProjectList";

const Projects: React.FC = () => {
    const dispatch = useDispatch();
    const [selectedProject, setSelectedProject] = useState(-1);
    const backgroundClass = useSelector(getProjectsBackground);
    const textClass = useSelector(getTextTheme);
    const cardShape = useSelector(getCardShape);
    const cardClasses = useSelector(getCardClasses);
    const [cardColors, setCardColors] = useState(descriptions.map(() => cardClasses[Math.floor(Math.random() * cardClasses.length)]));
    
    const setColors = useCallback(() => {
        const classes = descriptions.map(() => cardClasses[Math.floor(Math.random() * cardClasses.length)]);
        setCardColors(classes);
    }, [ cardClasses ]);

    useEffect(() => {
        setColors();
    }, [ cardClasses, setColors ]);

    return (
        <div className={`full-page ${backgroundClass} ${textClass}`} id="projects">
            <div className="column-centered">
                <div className={`row-center align-center border-bottom border-${textClass.split('text-')[1]} px-3`}>
                    <p className="text-center text-header my-3">projects</p>
                    <h1 className="bi bi-arrow-repeat text-shadow-lg font-bold mx-3 pointer row align-center" onClick={() => setColors()} />
                </div>

                <div className="row-center mt-3">
                    <i className={`fas fa-square fa-2x ${cardShape === 'card-bubble' ? 'text-white' : 'greyed-out'} mx-2 pointer`} onClick={() => dispatch(setCardShape('card-bubble'))}></i>
                    <i className={`fas fa-circle fa-2x ${cardShape === 'card-circle' ? 'text-white' : 'greyed-out'} mx-2 pointer`} onClick={() => dispatch(setCardShape('card-circle'))}></i>
                </div>
                <div className="lg-mx-5 lg-px-5 mt-0 pt-0 mb-5">
                    {
                        selectedProject === -1 ?
                        <ProjectList 
                            projects={descriptions} 
                            cardClasses={cardColors}
                            selectProject={setSelectedProject} 
                        /> :
                        <ProjectDetails
                            project={descriptions[selectedProject]}
                            cardClass={cardColors[selectedProject]}
                            textClass={textClass}
                            deselect={() => setSelectedProject(-1)}
                        />
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default Projects;
