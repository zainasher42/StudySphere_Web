import React, { useState } from 'react';
import './SUstyles.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import the createUserWithEmailAndPassword method
import { auth } from '../../fire'; // Import the auth object from your Firebase configuration

function SignUpCard() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // State to manage successful sign-up redirection

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        // You can redirect the user to another page or perform any other actions here
        console.log('User signed up successfully:', user);
        setSuccess(true); // Set success to true to trigger redirection
      })
      .catch((error) => {
        // Handle errors here
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(errorMessage);
      });
  };

  return (
    <div className="card">
      <h1 className='Title'>SIGN UP</h1>
      <input type="text" name="username" placeholder="USERNAME" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" name="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} className="t2" />
      <input type="password" name="confirmPassword" placeholder="CONFIRM PASSWORD" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <p className="text1">Already have an account? <Link to="/" className="text2">SIGN IN</Link></p>
      {error && <p className="error">{error}</p>}
      {success && (
        <p className="success">User successfully signed up. <Link to="/" className="text2">Sign in</Link> to continue.</p>
      )}
      {!success && <button className="btn1" onClick={handleSignUp}>SIGN UP</button>}
    </div>
  );
}

export default SignUpCard;
