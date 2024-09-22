import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './Register.css';


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/login');
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', {
                username,
                email,
                password,
                isadmin: isAdmin
            });
            if (response.status === 201) {
                alert('User created successfully');
                setUsername('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                navigate('/login')

            }            
            else {
                alert('Failed to create user');
            } 
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='reg-mainpage' >
          <center>
          <h2>Register</h2>
            <form onSubmit={handleSubmit} className='regform'>
                <h2>Register From</h2>
                <div>
                <label  className='rname' >Username:</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                
                <div>
                <label>Email:</label>
                <input type='ś' value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                
                <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                
                <div>
                <label>Confirm Password:</label>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>

                
            
                <button type='submit'>Register</button>
                <center><p>or</p></center>
                <button onClick={handleclick} >Login</button>

            </form>
          </center>

        </div>
    );
};

export default Register;