import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const AllJobs = () => {
  
    const [data,setData] = useState([]);
    useEffect(()=>{
      axios.get('https://jlback.onrender.com/govtjob').then(res=>setData(res.data))
    },[])

  return (
    <div>
       <header className='header'>
        <NavLink to='/'>
        <div className='appName'>
      <h3>Government</h3><h1>Job Locator</h1>
      <img src='search-job-logo-icon-design-vector-22742472.jpg'/>
     </div>
      </NavLink>
     <nav  className='navbar1'>
      <NavLink to='/' ><><img src='th.jpg' alt='all'/></></NavLink>
      <NavLink to='/GovtJobs' className='img1' data-title='Government Jobs'><img src='Government-icon-by-marco.livolsi2014-7-580x386.jpg' alt='GovtJobs'/></NavLink>
    <NavLink to='/PrivateJobs' className='img2' data-title='Private'><img src='private_job.png' alt='private jobs'/></NavLink>
    <NavLink to='/studies' className='img3' data-title='Studies'><img src='46851208-education-and-learning-icons-graphic-design-vector-illustration.jpg' alt='Studies'/></NavLink>
      </nav>
        </header>     
    <div className="card-container">
  <h1 className='headName'>Government Jobs</h1>
  {data.map(job => (
    <div key={job._id} className="card">
      <div className='heading'>
        <h2>{job.jobRole}</h2>
        <h5>{job.companyName}</h5>
      </div>
      <p>🚩 {job.location}</p>
      <p>💵 {job.salary}</p>
      <p>📅 {job.duration}</p>
      <h4>
        <NavLink to={`/job/${job._id}`}><button>viewdetails</button></NavLink>
      </h4>
    </div>
  ))}
</div>
    </div>
  );
};

export default AllJobs;