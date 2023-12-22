import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
    return (
        <div className="contactcard card w-50 mx-auto mt-5 shadow-lg">
            <form className="card-body">
                <h1 className="mb-4">Contact Me</h1>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstname" aria-describedby="firstname" placeholder="First Name" />
                    </div>
                    <div className="col">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastname" aria-describedby="lastname" placeholder="Last Name" />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="email" placeholder="Email Address" />
                </div>

                <div>
                    <label htmlFor="textBody" className="form-label">Message</label>
                    <textarea className="form-control" id="textBody" aria-label="textarea" placeholder="Questions, Comments"></textarea>
                </div>
                <button type="submit" className="contactbtn btn btn-primary mt-3">Submit</button>
            </form>
            <p>(form not functional, feel free to reach me at phillipmguetterman@att.net)</p>
        </div>
    );
}
