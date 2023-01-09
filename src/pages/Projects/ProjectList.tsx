import React from "react";
import { ProjectDescription } from "../../media/projects";
import { getCardShape } from "../../store/Theme.store";
import { useSelector } from "react-redux";

interface ProjectListProps {
    projects: ProjectDescription[];
    cardClasses: string[];
    selectProject: (idx: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, cardClasses, selectProject }) => {
    const cardShape = useSelector(getCardShape);
    
    return (
        <div id="project-list" className="row wrap text-center text-heading">
            {
                projects.map((project, idx) => 
                <div className="col-6 col-lg-4" key={idx}>
                    <div className={`pointer ${cardShape} ${cardClasses[idx]} m-4 row-center align-center `} 
                        id={`card${idx+1}`} 
                        onClick={() => selectProject(idx)}>
                        <p className="h3 mt-2 text-medium text-22 md-text-35 disabled" style={{userSelect: 'none'}}>{project.title}</p>
                    </div>
                </div>)
            }
        </div>
    );

    /*
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    return (
        <div id="project-list" className="row wrap lg-m-5 lg-p-5 mt-0 pt-0 text-heading">
            {
                projects.map((project, idx) => 
                <div className={` ${selectedProject !== null ? idx === selectedProject ? 'row ' : 'hide' : 'col-6 col-lg-4'}`} key={idx}>
                    <div className={`${cardClasses[idx]} ${selectedProject === idx ? 'border-20 m-3 lg-m-5 relative p-3' : `pointer ${cardShape} row-center align-center m-4`}`}
                         onClick={() => {if (selectedProject === null) setSelectedProject(idx)}}>
                        {
                            selectedProject === idx ?
                                <>
                                    <div className="rel-top-left pointer" onClick={() => setSelectedProject(null)}><i className="fas fa-times fa-2x" /></div>
                                    <p className="text-center text-medium m-3" id="project-title">{project.title}</p>
                                    <p className="text-about line-height-150 my-3 mx-2" id="project-description" dangerouslySetInnerHTML={{__html: project.description || ""}}></p>
                                </> :
                                <p className="h3 mt-2 text-medium text-22 md-text-35 disabled" style={{userSelect: 'none'}}>{project.title}</p>
                        }
                    </div>
                </div>)
            }
        </div>
    );
     */
}

export default ProjectList;
