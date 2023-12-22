import '../styles/Resume.css';

const Resume = () => {
    return (
        <div className="m-3 mx-auto p-3 bg-light w-50">

            <details open>
                <summary>
                    <h2 className="text-center resumeSection">Education</h2>
                </summary>
                <h4>B.M. in Music Business | Southern Illinois University of Edwardsville</h4>
                <p className="fst-italic">May 2021</p>
                <ul>
                    <li>Minor: Business Administration</li>
                    <li>Awards: Cougar Pride Scholarship, Member of National Honors Society</li>
                </ul>
                <h4>Full Stack Web Delopment Bootcamp | Washington University St. Louis</h4>
                <p className="fst-italic">Nov 2023</p>
                <ul>
                    <li>Worked with many different languages and technologies including: MongoDB, React, Express, MERN Stack, PWA, mySQL, noSQL, Handlebars</li>
                    <li>Created front-end, back-end, and full-stack web applications</li>
                    <li>Experienced working in groups, collaborating on developing an idea and building it from the ground up</li>
                </ul>
            </details>

            <details open>
                <summary>
                    <h2 className="text-center resumeSection">Work Experience</h2>
                </summary>

                <details open>
                    <summary>
                        <h4>Fire Alarm Technician | Midwest Electronic Systems</h4>
                        <p className="fst-italic">Aug 2022 – Present</p>
                    </summary>
                    <ul>
                        <li>Independently traveled to different businesses and buildings to work on fire alarm systems.</li>
                        <li>Performed annual inspections testing all of the equipment to ensure proper function.</li>
                        <li>Installed and programmed new systems into existing buildings and new construction.</li>
                        <li>Troubleshooted and resolved any issues present on systems.</li>
                        <li>Wrote detailed updates to ensure clarity on what was completed and what might be needed.</li>
                        <li>Interacted with customers and made sure to act professionally and courteously.</li>
                    </ul>
                </details>

                <details open>
                    <summary>
                        <h4>Office/Warehouse Assistant | Midwest Electronic Systems</h4>
                        <p className="fst-italic">Jan 2022 – Aug 2022</p>
                    </summary>
                    <ul>
                        <li>Designed layout and organization system for the warehouse.</li>
                        <li>Received shipments of parts and equipment and sorted appropriately.</li>
                        <li>Communicated with order manager about order statuses, issues, and ETAs.</li>
                        <li>Ensured timely delivery of parts and equipment to various job sites.</li>
                    </ul>
                </details>

                <details open>
                    <summary>
                        <h4>L3 Lead Technician | World Wide Technology</h4>
                        <p className="fst-italic">Aug 2021 – Jan 2022</p>
                    </summary>
                    <ul>
                        <li>Communicated with customers about order statuses, issues, and ETAs.</li>
                        <li>Assisted my team with resolving technical issues and ensured they stayed on task.</li>
                        <li>Worked with remote support teams to troubleshoot complications with networking devices.</li>
                        <li>Compiled daily data reports of production and descriptive summaries of the events of the day.</li>
                        <li>Acted as a liaison between my team and upper management.</li>
                        <li>Carried out duties of L3 technician as necessary to meet production goals.</li>
                    </ul>
                </details>

                <details open>
                    <summary>
                        <h4>L3 Technician | World Wide Technology</h4>
                        <p className="fst-italic">Oct 2019 – Aug 2021</p>
                    </summary>
                    <ul>
                        <li>Stepped in as team lead on days when the primary lead was absent.</li>
                        <li>Assisted with training new employees on staging and provisioning.</li>
                        <li>Selected as the employee of the month in February 2021.</li>
                        <li>Awarded a discretionary bonus for being the highest producer on the team in October 2020.</li>
                        <li>Worked with Oracle to locate and track transactions of inbound inventory.</li>
                        <li>Configured switches and phones for businesses nationwide.</li>
                        <li>Configured network servers using the Command Prompt.</li>
                        <li>Created Excel spreadsheets to consolidate data for labeling and organizational purposes.</li>
                    </ul>
                </details>


            </details>

            <details open>
                <summary>
                    <h2 className="text-center resumeSection">Volunteer Experience</h2>
                </summary>

                <details open>
                    <summary>
                        <h4>Counselor | Westminster Summer Camp</h4>
                        <p className="fst-italic">May 2011 – May 2014</p>
                    </summary>
                    <ul>
                        <li>Supervised children ages 5-11 while maintaining a safe, fun, and energetic environment.</li>
                    </ul>
                </details>

                <details open>
                    <summary>
                        <h4>Senior Patrol Leader | Boy Scout Troop 85</h4>
                        <p className="fst-italic">Jun 2013 – May 2014</p>
                    </summary>
                    <ul>
                        <li>Achieved the highest level of scout leadership within the troop.</li>
                        <li>Awarded with the Order of the Arrow - given for exemplifying exceptional leadership qualities.</li>
                    </ul>
                </details>


            </details>

        </div>
    );
};

export default Resume;
