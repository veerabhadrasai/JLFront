import React, { useState, useEffect } from 'react';
import axios from 'axios';


const DeleteStudy = ({ studyId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://jlback.onrender.com/deletestudy/${studyId}`);

      if (response.status === 200) {
        // Study data deleted successfully, trigger the onDelete callback
        onDelete();
        window.alert('Study data deleted successfully');
      } else {
        console.error('Error deleting study data:', response.data);
        // Display the error on the screen or handle it accordingly
        window.alert('Error deleting study data');
      }
    } catch (error) {
      console.error('Error deleting study data:', error);
      // Display the error on the screen or handle it accordingly
      window.alert('Error deleting study data');
    }
  };

//   <h2>
//   <NavLink to={`/study/${study._id}`}>{study.title}</NavLink>
// </h2>

  return (
    <button onClick={handleDelete}>
      Delete Study
    </button>
  );
};

const AllStudies = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('https://jlback.onrender.com/study').then(res => setData(res.data));
  }, []);

  const handleDelete = () => {
    // Implement any logic needed after study deletion, if required
    // For example, you might want to refresh the list of studies
    // This function will be passed as a callback to DeleteStudy
    // and will be triggered after a successful deletion
    axios.get('https://jlback.onrender.com/study').then(res => setData(res.data));
  };

  return (
    <div className="container">
    <h1>Delete Studies</h1>
    {data.map(study => (
      <div key={study._id} className="item">
        <h2>{study.title}</h2>
        <DeleteStudy studyId={study._id} onDelete={handleDelete} />
        {/* Add more details as needed */}
      </div>
    ))}
  </div>  
  );
};

export default AllStudies;


