import '../styles/Portfolio.css'
import { ProjectCard } from '../components/Project'

import movieMachine from '../assets/images/MovieMachine.jpg';
import workDayScheduler from '../assets/images/WorkDayScheduler.jpg';
import bookInventory from '../assets/images/BookInventory.jpg';
import noteTaker from '../assets/images/NotetakerApp.jpg';
import weatherApp from '../assets/images/WeatherApp.jpg';
import passwordGenerator from '../assets/images/PasswordGenerator.jpg'
import employeeTracker from '../assets/images/EmployeeTracker.jpg'



export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <p>
                View my portfolio.
            </p>

            <div className="container text-center">
                <div className="row">
                    <ProjectCard imgsrc={movieMachine} imgalt="Movie Machine Site" heading="Magic Movie Machine"
                        paragraph="" github="https://github.com/andmell/movie-generator" deployed="https://andmell.github.io/movie-generator/">
                    </ProjectCard>
                    <ProjectCard imgsrc={workDayScheduler} imgalt="Work Day Scheduler Site" heading="Work Day Scheduler"
                        paragraph="" github="https://github.com/phillymg/Calendar-App" deployed="https://phillymg.github.io/Calendar-App/">
                    </ProjectCard>
                    <ProjectCard imgsrc={bookInventory} imgalt="Book Store Inventory Site" heading="Books Galore"
                        paragraph="" github="https://github.com/bycait27/bookstore-inventory" deployed="https://quiet-sierra-53897-6dfbdf75b102.herokuapp.com/">
                    </ProjectCard>
                    <ProjectCard imgsrc={noteTaker} imgalt="Note Taker Site" heading="Note Taker App"
                        paragraph="" github="https://github.com/phillymg/Note-Taker" deployed="https://note-tastic-6b844eaabec9.herokuapp.com/notes">
                    </ProjectCard>
                    <ProjectCard imgsrc={weatherApp} imgalt="Weather Site" heading="5 Day Forecast"
                        paragraph="" github="https://github.com/phillymg/Weather-App" deployed="https://phillymg.github.io/Weather-App/">
                    </ProjectCard>
                    <ProjectCard imgsrc={passwordGenerator} imgalt="Password Generator Site" heading="Password Generator"
                        paragraph="" github="https://github.com/phillymg/Password_Generator" deployed="https://phillymg.github.io/Password_Generator/">
                    </ProjectCard>
                </div>
            </div>
        </div>
    );
}
