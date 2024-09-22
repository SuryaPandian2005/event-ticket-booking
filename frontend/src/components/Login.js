import './Login.css'; // Adjust if file name differs
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignupRedirect = () => {
        navigate('/signup');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', {
                email,
                password
            });

            if (response.status === 200) {
                alert('Login successful');
                navigate('/'); // Redirect to home or another page after successful login
            }
        } catch (error) {
            console.error(error.response); // Log the exact error
            if (error.response && error.response.status === 401) {
                alert('Invalid email or password');
            } else if (error.response && error.response.status === 404) {
                alert('User not registered. Redirecting to signup page...');
                navigate('/signup');
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='logmain'>
            <center>
                <form onSubmit={handleSubmit} className='logform'>
                    <h2>Login Form</h2>
                    <div>
                        <label>Email:</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type='submit'>Login</button>
                    <p>or</p>
                    <button type='button' onClick={handleSignupRedirect}>Signup</button>
                </form>
            </center>
        </div>
    );
};

export default Login;
