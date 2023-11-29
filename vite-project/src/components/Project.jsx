const ProjectCard = ({ imgsrc, imgalt, heading, paragraph, github, deployed }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card p-2 shadow-lg d-flex flex-column h-100 portfoliocard">
                <img src={imgsrc} className="card-img-top" alt={imgalt} />
                <div className="card-body flex-fill d-flex flex-column">
                    <h1>{heading}</h1>
                    <p className="card-text flex-fill">{paragraph}</p>
                    <div className="mt-auto">
                        <a className="btn btn-outline-primary me-2" href={github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        <a className="btn btn-outline-primary" href={deployed} target="_blank" rel="noopener noreferrer">Deployed Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ProjectCard };