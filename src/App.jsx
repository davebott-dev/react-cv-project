import { useState } from "react";
import Panel from "./components/accordian";
import "./App.css";
//initialize a variable to use as a key for map function below
let nextIdEdu = 0;
let nextIdJob = 0;

function App() {
  //useState that allows for panel functionality--when one panel is open
  //the other closes
  const [activeIndex, setActiveIndex] = useState(0);

  //useState allows the input values to change
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");

  const [schoolName, setSchoolName] = useState("");
  const [degreeTitle, setDegreeTitle] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [schoolStart, setSchoolStart] = useState("");
  const [schoolEnd, setSchoolEnd] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [positionLocation, setPositionLocation] = useState("");
  const [jobStart, setJobStart] = useState("");
  const [jobEnd, setJobEnd] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  //initializes a useState object to be an empty array
  const [educationInfo, setEducationInfo] = useState([]);
  const [experienceInfo, setExperienceInfo] = useState([]);

  //functions that push all the necessary information to the end of the array
  //the array element is an object that stores all necessary data
  const func1 = () => {
    setEducationInfo([
      ...educationInfo,
      {
        id: nextIdEdu++,
        name: schoolName,
        degree: degreeTitle,
        location: schoolLocation,
        start: schoolStart,
        end: schoolEnd,
      },
    ]);
  };

  const func2 = () => {
    setExperienceInfo([
      ...experienceInfo,
      {
        id: nextIdJob++,
        name: companyName,
        title: positionTitle,
        location: positionLocation,
        start: jobStart,
        end: jobEnd,
        description: jobDescription,
      },
    ]);
  };

  //finally helper functions that will map through the arrays and return jsx
  const createEducationBlock = () => {
    return educationInfo.map((school) => (
      <div className="block" key={school.id}>
        <div>
          <div>
            {school.start} - {school.end}
          </div>
          <div>{school.name}</div>
        </div>
        <div>
          <div>
            <strong>{school.degree}</strong>{" "}
          </div>
          <div>{school.location} </div>
        </div>
      </div>
    ));
  };

  const createExperienceBlock = () => {
    return experienceInfo.map((element) => (
      <>
        <div className="block" key={element.id}>
          <div>
            <div className="innerBlock">
              {element.start} - {element.end}
            </div>
            <div className="innerBlock">{element.name}</div>
          </div>
          <div>
            <div className="innerBlock">
              <strong>{element.title}</strong>{" "}
            </div>
            <div className="innerBlock">{element.location} </div>
          </div>
        </div>
        <div className="innerBlock descrip">{element.description}</div>
      </>
    ));
  };

  return (
    <div className="container">
      <div className="card left">
        <form id="static">
          <h1>Personal Details</h1>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            placeholder="David Bottenberg"
            onChange={(e) => setFullName(e.target.value)}
          ></input>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label htmlFor="phoneNum">Phone Number:</label>
          <input
            type="number"
            id="phoneNum"
            placeholder="123-456-7890"
            onChange={(e) => setPhoneNum(e.target.value)}
          ></input>

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Anytown, USA"
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </form>

        <Panel
          title="Education"
          isActive={activeIndex == 0}
          onShow={() => setActiveIndex(0)}
        >
          <label htmlFor="school">School:</label>
          <input
            type="text"
            id="school"
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="Enter School/University"
          ></input>

          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            onChange={(e) => setDegreeTitle(e.target.value)}
            placeholder="Enter Degree/Field of Study"
          ></input>

          <div className="dates">
            <div className="date">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                onChange={(e) => setSchoolStart(e.target.value)}
              ></input>
            </div>

            <div className="date">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                onChange={(e) => setSchoolEnd(e.target.value)}
              ></input>
            </div>
          </div>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            onChange={(e) => setSchoolLocation(e.target.value)}
            placeholder="Location of School/University"
          ></input>

          <button type="button" onClick={func1}>
            + education
          </button>
        </Panel>

        <Panel
          title="Experience"
          isActive={activeIndex == 1}
          onShow={() => setActiveIndex(1)}
        >
          <label htmlFor="company">Company Name:</label>
          <input
            type="text"
            id="company"
            placeholder="Enter Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
          ></input>

          <label htmlFor="position">Position Title:</label>
          <input
            type="text"
            id="position"
            placeholder="Enter Position Title"
            onChange={(e) => setPositionTitle(e.target.value)}
          ></input>

          <div className="dates">
            <div className="date">
              <label htmlFor="startDate">Start Date:</label>
              <input
                type="date"
                id="startDate"
                onChange={(e) => setJobStart(e.target.value)}
              ></input>
            </div>

            <div className="date">
              <label htmlFor="endDate">End Date:</label>
              <input
                type="date"
                id="endDate"
                onChange={(e) => setJobEnd(e.target.value)}
              ></input>
            </div>
          </div>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Enter Job Location"
            onChange={(e) => setPositionLocation(e.target.value)}
          ></input>

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            placeholder="Briefly describe your role"
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>

          <button type="button" onClick={func2}>
            + experience
          </button>
        </Panel>
      </div>
      <div className="rightCont">
        <div className="card right">
          <div className="heading">
            <div className="top">{fullName}</div>
            <div className="bottom">
              <div className="iconGroup">
                <svg
                  viewBox="0 -2.5 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>email [#ffffff]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-340.000000, -922.000000)"
                        fill="#ffffff"
                      >
                        {" "}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {" "}
                          <path
                            d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812 Z"
                            id="email-[#ffffff]"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                {email}
              </div>

              <div className="iconGroup">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
                {phoneNum}
              </div>

              <div className="iconGroup">
                <svg
                  fill="#ffffff"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"></path>
                  </g>
                </svg>
                {address}
              </div>
            </div>
          </div>

          <div className="body">
            <div className="educationBlock">
              <div className="title">Education</div>
              {createEducationBlock()}
            </div>
            <div className="experienceBlock">
              <div className="title">Experience</div>
              {createExperienceBlock()}
            </div>
          </div>
        </div>
        <button
          className="btn"
          onClick={() =>{
            setTimeout(() => {
              alert("Your resume has now been saved");
            }, 2000)
            }
          }
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
