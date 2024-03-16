import React, { useState } from 'react';
import axios from 'axios';

const AddStudyForm = () => {
    const [studyData, setStudyData] = useState({
        applyLink: '',
        discription: '',
        title: '',
        duration: '',
        qualifications:''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudyData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://jlback.onrender.com/addstudy', studyData);
            setSuccessMessage('Data added successfully');
            alert('Data added successfully');
            // Optionally, you can redirect or perform other actions after successful data addition
        } catch (error) {
            console.error('Error adding study data:', error);
            alert('! some values are being empty...! please fill it... (or) something went worng...!');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <h1>Add Study Data</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Apply Link:
                    <input type="text" name="applyLink" value={studyData.applyLink} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea name="discription" value={studyData.discription} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Title:
                    <input type="text" name="title" value={studyData.title} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Duration:
                    <input type="text" name="duration" value={studyData.duration} onChange={handleChange} />
                </label>
                <label>
                qualifications:
                    <input type="text" name="qualifications" value={studyData.qualifications} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add Data</button>
            </form>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    );
};

export default AddStudyForm;


