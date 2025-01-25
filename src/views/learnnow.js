import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar41 from "../components/navbar41";
import Footer from "../components/footer";

const LearnNow = () => {
    const [password, setPassword] = useState("");
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [lessons, setLessons] = useState([])

    // Mock data for lessons
    const manualTesting = [
        {name: 'Leeson 1', url: ""}
    ]
    const javaCourse = [
        {name: 'Lesson 1 First Java Program', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%201%20First%20Java%20Program.mp4'},
        {name: 'Lesson 2 Data types and variables', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%202%20Data%20types%20and%20variables.mp4'},
        {name: 'Lesson 3 Arithmetic Operators', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%203%20Arithmetic%20Operators.mp4'},
        {name: 'Lesson 4 Logical Operators and if block', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%204%20Logical%20Operators%20and%20if%20block.mp4'},
        {name: 'Lesson 5 Switch case', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%205%20Switch%20case.mp4'},
        {name: 'Lesson 6 Strings', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%206%20Strings.mp4'},
        {name: 'Lesson 7 Arrays', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%207%20Arrays.mp4'},
        {name: 'Lesson 8 Loops', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%208%20Loops.mp4'},
        {name: 'Lesson 9 Classes and objects', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%209%20Classes%20and%20objects.mp4'},
        {name: 'Lesson 10 Abstract Classes', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2010%20Abstract%20Classes.mp4'},
        {name: 'Lesson 11 Interfaces', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2011%20Interfaces.mp4'},
        {name: 'Lesson 12 Inheritance and Overrinding', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2012%20Inheritance%20and%20Overrinding.mp4'},
        {name: 'Lesson 13 Polymoprhism and Overloading', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2013%20Polymoprhism%20and%20Overloading.mp4'},
        {name: 'Lesson 14 Exceptions', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2014%20Exceptions.mp4'},
        {name: 'Lesson 15 Generics', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2015%20Generics.mp4'},
        {name: 'Lesson 16 Collections', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2016%20Collections.mp4'},
        {name: 'Lesson 17 Locators in Selenium', url: 'https://github.com/6432633/software-testing-java/raw/refs/heads/main/lessons%20done/Lesson%2017%20Locators%20in%20Selenium.mp4'}
    ]
    const cypressCourse = [
        {name: '', url: ''}
    ]
    const passwords = ['F#45', '45R&', '41Pp' ]
    // Handle password submission
    const handleAuthorize = () => {
        if (passwords.includes(password)) {
            setIsAuthorized(true); // Authorize the user
            if (password == 'F#45') {
                setLessons(manualTesting);
            } else if(password === '45R&') {
                setLessons(javaCourse)
            } else setLessons(cypressCourse)
        } else {
            alert("Incorrect password"); // Show error for incorrect password
        }
    };

    // Handle lesson selection
    const handleLessonClick = (lesson) => {
        setSelectedLesson(lesson);
    };

    return (
        <div>
            <Helmet>
        <title>Pricing - Best Prices In The Industry</title>
        <meta
          property="og:title"
          content="Learn Now<"
        />
      </Helmet>
            <Navbar41
                link1={
                    <Fragment>
                        <span className="contact1-text10">Home</span>
                    </Fragment>
                }

                link2={
                    <Fragment>
                        <span className="contact1-text13">Courses</span>
                    </Fragment>
                }
                link3={
                    <Fragment>
                        <span className="contact1-text15">Pricing</span>
                    </Fragment>
                }
                link4={
                    <Fragment>
                        <span className="contact1-text11">Contact Us</span>
                    </Fragment>
                }
                link5={
                    <Fragment>
                        <span className="contact1-text11">Learn Now</span>
                    </Fragment>
                }

            ></Navbar41>
            <div style={{ alignItems: "center", textAlign: "center", display: "flex", justifyContent: "center" }}>
                {!isAuthorized ? (
                    // Authorization Form
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ marginBottom: "10px", padding: "5px" , border:"3px solid", borderRadius:"5px"}}
                        />
                        <br />
                        <button onClick={handleAuthorize} className="pricing-button14 thq-button-outline thq-button-animated">
                            Authorize
                        </button>
                        <br />
                        <span>Authorize with password</span>
                    </div>
                ) : (
                    // Lessons and Video Player
                    <div style={{ display: "flex", width: "80%", margin: "20px auto" }}>
                        {/* Lessons List */}
                        <div style={{ width: "35%", borderRight: "1px solid #ccc", paddingRight: "10px", justifyItems:"left" }}>
                            <h3 style={{marginBottom:"15px"}}>Lessons</h3>
                            {lessons.map((lesson, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleLessonClick(lesson)}
                                    style={{ cursor: "pointer", marginBottom: "10px" }}
                                >
                                    {lesson.name}
                                </div>
                            ))}
                        </div>

                        {/* Video Player */}
                        <div style={{ width: "65%", paddingLeft: "10px" }}>
                            
                            {selectedLesson ? (
                                <video controls src={selectedLesson.url} style={{ width: "100%" }} />
                            ) : (
                                <p>Select a lesson to play</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Footer></Footer>
        </div>
    )
}
export default LearnNow