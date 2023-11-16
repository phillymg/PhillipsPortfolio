export default function Contact() {
    return (

        <form className="w-50 mx-auto mt-5">
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
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="email" placeholder="Email Address"></input>
            </div>

            <div>
                <label for="exampleInputEmail1" id="textBody" className="form-label">Message</label>
                <textarea className="form-control" id="textBody" aria-label="textarea" placeholder="Questions, Comments"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
    );
}
