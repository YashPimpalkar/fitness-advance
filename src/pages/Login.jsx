import React from 'react'
import { auth, googleAuthProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Login = () => {


  const navigate =useNavigate();
  const handleSignInWithGoogle =async () =>{
    try {
      const result =await signInWithPopup(auth,googleAuthProvider);
      console.log(result);
      localStorage.setItem('token',result.user.accessToken);
      localStorage.setItem('user',JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Fitness-Club
        </Typography>
        <Button color="inherit"> <GoogleButton onClick={handleSignInWithGoogle} /></Button>
      </Toolbar>
    </AppBar>
  </Box>
  
   
  )
}

export default Login