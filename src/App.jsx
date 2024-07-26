import { useState, useEffect } from "react";
import Panel from "./components/accordian";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [increment, setIncrement] =useState(0);

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
//fist this function
  const createBlock = (count) => {
    let list = [];
    for(let i=0;i<count;i++) {
      list.push('hello world')
    }

  
  
  return list.map(element => (
  <>
    <div>
    <div>{element} </div>
    <div>University of North Carolina </div>
  </div>
  <div>
    <div>University of North Carolina </div>
    <div>116 Manning Street, Chapel Hill, NC </div>
  </div> 
</>
))
  }

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
            onChange={handleFullName}
          ></input>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            onChange={handleEmail}
          ></input>

          <label htmlFor="phoneNum">Phone Number:</label>
          <input
            type="number"
            id="phoneNum"
            placeholder="123-456-7890"
            onChange={handlePhoneNum}
          ></input>

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Anytown, USA"
            onChange={handleAddress}
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
            placeholder="Enter School/University"
          ></input>

          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            id="degree"
            placeholder="Enter Degree/Field of Study"
          ></input>

          <div className="dates">
            <div className="date">
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate"></input>
            </div>

            <div className="date">
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate"></input>
            </div>
          </div>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Location of School/University"
          ></input>

          <button type="button" onClick ={() =>setIncrement((prev)=>prev+1)} >+ education</button>
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
          ></input>

          <label htmlFor="position">Position Title:</label>
          <input
            type="text"
            id="position"
            placeholder="Enter Position Title"
          ></input>

          <div className="dates">
            <div className="date">
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate"></input>
            </div>

            <div className="date">
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate"></input>
            </div>
          </div>

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            placeholder="Enter Job Location"
          ></input>

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            placeholder="Briefly describe your role"
          ></textarea>

          <button type="button">+ experience</button>
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

              <div className="block">
                 {createBlock(increment)}
             
              </div>

            </div>
            <div className="experienceBlock">
              <div className="title">Experience</div>
            </div>
          </div>
        </div>
        <button className="btn">Save</button>
      </div>
    </div>
  );
}

export default App;
