import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const DeleteJob = ({ jobId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`https://jlback.onrender.com/deletejob/${jobId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Job data deleted successfully, trigger the onDelete callback
        onDelete();
      } else {
        const errorData = await response.json();
        console.error('Error deleting job data:', errorData);
      }
    } catch (error) {
      console.error('Error deleting job data:', error);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Job
    </button>
  );
};

const AllJobs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5001/alljobs').then((res) => setData(res.data));
  }, []);

  return (  
<div className="container">
  <div className="item">
    <h1>Delete Jobs</h1>

    {data.map((job) => (
      <div key={job._id} className="item">
        <h2>{job.jobRole}</h2>
        <p>Type: {job.type}</p>
        <p>Salary: {job.salary}</p>
        {/* Add more details as needed */}
        <DeleteJob jobId={job._id} onDelete={() => { console.log('Job deleted'); alert('Job deleted successfully. Please refresh this page.'); }} />
      </div>
    ))}
  </div>
</div>
  );
};

export default AllJobs;