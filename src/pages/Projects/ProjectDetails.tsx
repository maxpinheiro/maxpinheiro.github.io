import React from "react";
import { ProjectDescription } from "../../media/projects";
import { CloseIcon } from "../Navbar/Icons";

interface ProjectDetailsProps {
    project: ProjectDescription;
    cardClass: string;
    textClass: string;
    deselect: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, cardClass, textClass, deselect }) => (
    <div id="selected-project" className={`row border-20 my-4 mx-5 ${cardClass} max-w-900`}>
        <div className="container p-3 lg-p-5 relative">
            <div className="pointer absolute-top-left" onClick={deselect}>
                <CloseIcon color={`bg-${textClass.split('text-')[1]}`} />
            </div>
            <p className="text-center text-medium m-3" id="project-title">{project.title || ""}</p>
            <p className="text-about text-justify line-height-150 lg-line-height-200 my-3 mx-3" id="project-description" dangerouslySetInnerHTML={{__html: project.description || ""}}></p>
            {
                (project.siteLink || project.codeLink) &&
                <div className="border-bottom border-white-50 w-50 mx-auto" />
            }
            {
                project.siteLink &&
                <p className="text-center text-about">Check out the project <a href={project.siteLink} target='_blank' rel='noopener noreferrer'>here</a></p>
            }
            {
                project.codeLink &&
                <p className="text-center text-about">Check out the source code&nbsp;
                    {
                        Array.isArray(project.codeLink) ? 
                        project.codeLink.map((link, idx) => 
                            <span>
                                { project.codeLink && idx > 0 ? idx === project.codeLink.length - 1 ? project.codeLink.length > 2 ? ', and ' : ' and ' : project.codeLink.length > 2 ? ', ' : ' ' : '' }
                                <a href={link} target='_blank' rel='noopener noreferrer'>here</a>
                            </span>
                        ) :
                        <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>here</a>
                    }
                </p>
            }
        </div>
    </div>
)

export default ProjectDetails;