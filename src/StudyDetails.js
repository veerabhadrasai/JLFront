import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StudyDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`https://jlback.onrender.com/study/${id}`).then(res => setData(res.data));
  }, [id]); // Include 'id' as a dependency to re-fetch data when the ID changes

 

  return (
    <div className='studyDetails'>
      <h1>Study Details</h1>
      <div className='sdheading'>
      <h2 className='sd-title'>{data.title}</h2>
      </div>
      <p>📅 {data.duration}</p>
      <p>{data.qualifications}</p>
      <div className='discription'>{data.discription}</div>
      <a href={data.applyLink}><button>Apply Now</button></a> 
    </div>
  );
};

export default StudyDetails;

