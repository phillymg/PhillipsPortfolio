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
                        <p>My name is Phillip and I am a full-stack Web Developer.</p>
                        <p>My hobbies include:</p>
                        <ul>
                            <li>Hiking</li>
                            <li>Playing Guitar</li>
                            <li>Writing/Recording music</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
