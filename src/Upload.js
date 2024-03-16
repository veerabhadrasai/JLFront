import React from 'react';
import { NavLink } from 'react-router-dom';

const Upload = () => {
    return (
        <div className='upload'>
          <h2><NavLink to="/addjob"><button>Add Job</button></NavLink></h2> 
           <h2><NavLink to="/addStudy"><button>Add Study</button></NavLink></h2>
           <h2><NavLink to='/deleteJob'><button>Delete Job</button></NavLink></h2>
           <h2><NavLink to='/deleteStudy'><button>Delete Study</button></NavLink></h2>
        </div>
    );
}

export default Upload;
