export function ProjectCard({title, description,imgUrl}){
    return (
        <div className ="projectCard">
            <img src={imgUrl} className ="projectImg" alt="image" />
            <h3>{title}</h3>
            <span className="description">{description}</span>

        </div>
    )
}