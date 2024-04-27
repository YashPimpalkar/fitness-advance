import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Pricing from './Pricing';
import Navbar from '../components/Navbar';


const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("login");
    } catch (error) {
      console.error(error)
    }
  }

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <div>
      <div>
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
          <Navbar />
          <HeroBanner />
          <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
        </Box>
      </div>
    </div>
  )
}

export default Home