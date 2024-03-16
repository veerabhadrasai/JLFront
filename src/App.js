import React from 'react';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import JobList  from './Alljobs';
import JobDetails from './JobDetails';
import Govtjobs from './GovtJob';
import Privatejobs from './PrivateJobs';
import Studies from './Studies';
import Login from './Login';
import Upload from './Upload'
import AddJob from './AddJob';
import AddStudy from './AddStudy';
import DeleteJob from './DeleteJob';
import DeleteStudy from './DeleteStudy';
import StudyDetails from './StudyDetails';
import './App.css';



const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<JobList/>}/>
      <Route path="/job/:id" element={<JobDetails/>} />
      <Route path="/study/:id" element={<StudyDetails/>} />
      <Route path="/GovtJobs" element={<Govtjobs/>} />
      <Route path="/PrivateJobs" element={<Privatejobs/>}/>
      <Route path="/studies" element={<Studies/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/upload" element={<Upload/>} />
      <Route path="/addjob" element={<AddJob/>} />
      <Route path="/addStudy" element={<AddStudy/>} /> 
      <Route path="/deleteJob" element={<DeleteJob/>}/>  
      <Route path="/deleteStudy" element={<DeleteStudy/>}/>  
      </Routes>
    </Router>
  );
};

export default App;


