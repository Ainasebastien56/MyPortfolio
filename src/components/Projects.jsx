import projectImg from '../images/projectImg.png'
import { ProjectCard } from './ProjectCard'

export function Projects(){

    const projects =[
        {
            title: "my Portfolio",
            description : "the first project that i try React",
            imgUrl : projectImg
        },
        {
            title: "my Portfolio",
            description : "the first project that i try React",
            imgUrl : projectImg
        },
        {
            title: "my Portfolio",
            description : "the first project that i try React",
            imgUrl : projectImg
        },
    ]
    return (
        <div className="project" id= "projects">
                 <h2>Projects</h2>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis corporis suscipit vel aliquam, unde doloribus exercitationem repellat reiciendis, iure r</p>
           <div className="container_project">

              
       
        {
                    projects.map((project, index) =>{
                       return(
                        <ProjectCard key={index} {...project} />                        
                       )
                    })
                }
    
               
           </div>
        </div>
    )
}