import PhillipAvatar from '../assets/images/PhillipAvatar.jpg'; // Import the image
import '../styles/AboutMe.css'


export default function AboutMe() {
    return (
        <div>
            <h1>About Me Page</h1>
            <div className='row'>
                <div className='col'>
                    <img src={PhillipAvatar} className="card-img-top w-75 h-100 rounded" alt="Phillip Avatar" />
                </div>
                <div className='col'>
                    <h1>Hello!</h1>
                    <p>My name is Phillip and I am a full-stack Web Developer.</p>
                </div>
            </div>
        </div>
    );
}
