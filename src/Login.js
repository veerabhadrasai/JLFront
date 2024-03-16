import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    function Message() {
        const pass = document.getElementById('pass');

        if (pass.value === "") {
            alert("Please enter the password..!");
        } else {
            if (pass.value === "p@van") {
                // Redirect to '/dashboard'
                navigate('/upload');
            } else {
                alert("Wrong password..!");
            }
        }
    }

    return (
        <div>
            <h1>Security login</h1>
            <input type='password' placeholder='Enter password' id='pass' />
            <button onClick={Message}>Open</button>
        </div>
    );
}

export default Login;



