import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn, makeHeaders } from '../AJAXhelper';

const APIURL = `https://fakestoreapi.com/users`;

export default function RegisterForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [userData, setUserData] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async () => {
        try {
            const response = await fetch(APIURL + '/users', {
            method: 'POST',
            headers: makeHeaders(),
            body: JSON.stringify({username, password})
        });
        const result = await response.json();
        
        
        setSuccessMessage (result.data.message);
        setUserData (result.data);
        console.log(result)

        logIn(result.data.token);
        if (result.ok) {
        navigate('/login');
    }
        } catch (error){
            if (error) {
            setError (error);
            setErrorMessage (error.message);
        }}
    }



    return (
        <div className="container">
            <h1>Register</h1>
            

            <div className="form-input">
                <form onSubmit={handleSubmit}>
                <label>
                    <input
                        id="username"
                        placeholder='Username'
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </label>
                    <br />
                    <label>
                    <input
                        id="password"
                        placeholder='Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </label>
                    <br /><br />
                    <button type="submit" onClick={handleSubmit}>Register</button>
                    </form>
                    
                  
                 

                    {successMessage && <p className='success-message'>Success: {successMessage}</p>}
                    
                    {userData && <p>Welcome, {userData.username}!</p>}
                    
                    {error && <p className='error-message'>Error: {error.message}</p>}

                    {errorMessage && <p className='error-message'>Error: {errorMessage}</p>}
                    
                    
                    <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    )
} 