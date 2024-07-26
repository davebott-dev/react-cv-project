import { useState, useEffect } from "react";
import Panel from "./components/accordian";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [address, setAddress] = useState('');

  const handleFullName = (e) => {
    setFullName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePhoneNum = (e) => {
    setPhoneNum(e.target.value);
  }
  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  return (
    <div className="container">
      <div className="card left">
        <form id="static">
          <h1>Personal Details</h1>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" placeholder ="David Bottenberg" onChange={handleFullName}></input>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder ="example@email.com" onChange={handleEmail}></input>

          <label htmlFor="phoneNum">Phone Number:</label>
          <input type="number" id="phoneNum" placeholder ="123-456-7890" onChange={handlePhoneNum}></input>

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" placeholder ="Anytown, USA" onChange={handleAddress}></input>
        </form>

        <Panel
          title="Education"
          isActive={activeIndex == 0}
          onShow={() => setActiveIndex(0)}
        >
          <label htmlFor="school">School:</label>
          <input type="text" id="school" placeholder ="Enter School/University"></input>

          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" placeholder ="Enter Degree/Field of Study"></input>

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
          <input type="text" id="location" placeholder ="Location of School/University"></input>

          <button type="button">+ education</button>

   
        </Panel>

        <Panel
          title="Experience"
          isActive={activeIndex == 1}
          onShow={() => setActiveIndex(1)}
        >
          <label htmlFor="company">Company Name:</label>
          <input type="text" id="company" placeholder ="Enter Company Name"></input>

          <label htmlFor="position">Position Title:</label>
          <input type="text" id="position" placeholder ="Enter Position Title"></input>

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
          <input type="text" id="location" placeholder ="Enter Job Location"></input>

          <label htmlFor="description">Description:</label>
          <textarea type="text" id="description" placeholder ="Briefly describe your role"></textarea>

          <button type="button">+ experience</button>

        </Panel>
      </div>
      <div className="rightCont">
      <div className="card right">
        <div className="heading">
          <div className="top">
          {fullName}
          </div>
          <div className="bottom">
            <div>
            {email} 
            </div>

            <div>
            {phoneNum} 
            </div>

            <div>
            {address} 
            </div>

          </div>
          
        </div>

<div className="body">
  
        <div className="educationBlock">
          <div className="title">Education</div>

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
