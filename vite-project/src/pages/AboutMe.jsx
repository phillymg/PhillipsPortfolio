import PhillipAvatar from '../assets/images/PhillipAvatar.jpg'; // Import the image


export default function AboutMe() {
    return (
        <div>
            <h1>About Me Page</h1>
            <div>
                <img src={PhillipAvatar} className="card-img-top w-25" alt="Phillip Avatar" />
            </div>
        </div>
    );
}
