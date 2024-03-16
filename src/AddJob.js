import React, { useState } from 'react';

const AddJobForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    companyName: '',
    jobRole: '',
    salary: '',
    qualifications: '',
    location: '',
    discription: '',
    applyLink: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jlback.onrender.com/addjob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Job added successfully!');
        alert('Data added successfully');
        // You can redirect or perform any other action upon successful submission
      } else {
        console.error('Failed to add job:', response.statusText);
        alert('some values are being empty...! please fill it... (or) something went worng...!');
      }
    } catch (error) {
      console.error('Error adding job:', error);
      alert('! some values are being empty...! please fill it... (or) something went worng...!');
    }
  };

  return (
    <div>
      <h1>Add Job</h1>
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
      <option value="">Select Type</option>
      <option value="govt">govt</option>
      <option value="private">private</option>
    </select>
        <label>Company Name:</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />

        <label>Job Role:</label>
        <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} />

        <label>Salary:</label>
        <input type="text" name="salary" value={formData.salary} onChange={handleChange} />

        <label>Qualifications:</label>
        <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} />

        <label>Location:</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="discription" value={formData.discription} onChange={handleChange}></textarea>

        <label>Apply Link:</label>
        <input type="text" name="applyLink" value={formData.applyLink} onChange={handleChange} />

        <label>Duration:</label>
        <input type="text" name="duration" value={formData.duration} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddJobForm;
