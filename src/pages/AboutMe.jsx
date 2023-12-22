import React from 'react';
import PhillipAvatar from '../assets/images/PhillipAvatar.jpg';
import '../styles/AboutMe.css';

export default function AboutMe() {
    return (
        <div className="aboutcard card mt-3">
            <div className='row'>
                <div className='col-md-4'>
                    <img src={PhillipAvatar} className="card-img-top w-100 h-100 rounded p-3" alt="Phillip Avatar" />
                </div>
                <div className='col-md-8'>
                    <div className="card-body">
                        <h1>Hello!</h1>
                        <p>Hello! My name is Phillip, and I am an aspiring Web Developer. I graduated college with a Bachelor's Degree in Music Business, but after graduation, I found myself starting my first full-time job at World Wide Technology. After excelling at the responsibilities of my position and moving up the ranks, I was given opportunities to work with networking and that showed me I had a strong interest in this broader industry.</p>

                        <p>During this time, I started taking online courses in networking and web development and found myself leaning more towards coding and web development for the combination of logical and creative thinking. I then went on to working more hands-on with technology as a fire alarm technician where I installed, programmed, and troubleshooted fire alarm equipment. During this time, I took the leap and started a Full-Stack web development bootcamp where I learned a lot of different languages, technologies, and concepts to start a career and web developer.</p>

                        <p>This path of weaving through music business, technology, and finally settling on web development shows my adaptability and passion for learning and personal growth. I'm very excited to take this next step in my career and to finally interlock my skillsets of logical and creative thinking.</p>
                        <p>My hobbies include:</p>
                        <ul>
                            <li>Hiking</li>
                            <li>Frisbee Golf</li>
                            <li>Playing Guitar</li>
                            <li>Writing/Recording music</li>
                        </ul>
                        <p>Please reach to me with any questions or comments!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
