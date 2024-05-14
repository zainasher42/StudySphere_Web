import React, { useState } from 'react';
import './SIstyles.css';
import logo from '../logo.png';
import SimpleAlert from '../general/snackbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import the signInWithEmailAndPassword method
import { auth } from '../../fire'; // Import the auth object from your Firebase configuration

function SignInCard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate(); // Initialize useHistory hook to manage navigation

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log('User signed in successfully:', user);
        history('/home'); // Redirect to /home upon successful sign-in
      })
      .catch((error) => {
        // Handle errors here
        const errorMessage = error.message;
        setError(errorMessage);
        console.error(errorMessage);
      });
  };

  return (
    <>
    <div className="card">
      <img src={logo} style={{ zIndex: 1, position: 'relative' }} className="logos1" />
      <h1 className='Title1'>StudySphere</h1>
      <input type="email" name="email" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} className="t2" />
      <p className="text11">*By signing-in you are agreeing to <Link to="/TnC" className="text12">Terms & Conditions</Link></p>
      <button className="btn1" onClick={handleSignIn}>SIGN IN</button>
      <Link to="/SignUp"><button className="btn2">SIGN UP</button></Link>
    </div>
    {error && <SimpleAlert message={error} type="error"/>}
    </>
  );
}

export default SignInCard;
