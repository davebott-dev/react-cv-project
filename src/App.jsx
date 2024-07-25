import { useState,useEffect } from 'react';
import Panel from './components/accordian';
import './App.css';

function App() {


  return (
    <div className="container">
      <div className="card left">
        <form id="static">
          <h1>Personal Details</h1>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName"></input>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email"></input>

          <label htmlFor="phoneNum">Phone Number:</label>
          <input type="number" id="phoneNum"></input>

          <label htmlFor="address">Address:</label>
          <input type="text" id="address"></input>
        </form>


        <Panel title ="Education">
          <label htmlFor="school">School:</label>
          <input type="text" id="school"></input>

          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree"></input>

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

          <label htmlFor="address">Address:</label>
          <input type="text" id="address"></input>
 

        </Panel>


        <Panel title ="Experience">
          <label htmlFor="company">Company Name:</label>
          <input type="text" id="company"></input>

          <label htmlFor="position">Position Title:</label>
          <input type="text" id="position"></input>

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
          <input type="text" id="location"></input>

          <label htmlFor="description">Description:</label>
          <textarea type="text" id="description"></textarea>


 

        </Panel>
        
        


      </div>
      <div className="card right">



      </div>





    </div>
  )
}

export default App
