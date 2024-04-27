import React, { useState, useEffect } from 'react';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Suspense } from 'react';
import Footer from './components/Footer';
import Pricing from './pages/Pricing';
import HeroBanner from './components/HeroBanner';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, googleAuthProvider } from '../src/firebase';
import WelcomePage from './pages/Welcome';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        navigate('/');
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Outlet />
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Suspense fallback={<div>Loading...</div>}>
          {user ? null : <WelcomePage />}
        </Suspense>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
