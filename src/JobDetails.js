import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const JobDetails = () => {
  const {id}   = useParams();
  const [data, setData] = useState({});

  useEffect(()=>{
    axios.get(`https://jlback.onrender.com/job/${id}`).then(
      res=>setData(res.data))
  },[id])

  return (
    <div className='jobDetails'>
      <h1 className='JbTitle'>Job Details</h1>
      <div className='jbheading'>
      <h2>{data.jobRole}</h2>
        <h5>{data.companyName}</h5>
      </div>
      <div className='subJb'>
      <p>🚩 {data.location}</p>
      <p>💵 {data.salary}</p>
      <p>📅 {data.duration}</p>
      <p>{data.qualifications}</p>
      </div>
      <div className='discription'>
        {data.discription}
        </div>
      <a href={data.applyLink}><button>Apply Now</button></a>
      {/* Add more details as needed */}
    </div>
  );
};

export default JobDetails;
