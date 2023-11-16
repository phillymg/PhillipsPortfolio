

const ProjectCard = ({ imgsrc, imgalt, heading, paragraph, github, deployed }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 blahblah">
            <div className="card p-2 shadow-lg">
                <img src={imgsrc} className="card-img-top" alt={imgalt} />
                <div className="card-body">
                    <h1>{heading}</h1>
                    <p className="card-text">{paragraph}</p>
                    <div className="row">
                        <a className="col align-items-end" href={github}>GitHub Repo</a>
                        <a className="col align-items-end" href={deployed}>Deployed Site</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { ProjectCard }