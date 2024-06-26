import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth, googleAuthProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleSignInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="welcome">
            <Container maxWidth="md" style={{ marginTop: '100px', textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom style={{ color: '#FF69B4' }}>
                    Welcome to Fitness Club
                </Typography>
                <Typography variant="h5" paragraph>
                    Your one-stop destination for fitness and well-being.
                </Typography>
                <Typography variant="body1" paragraph>
                    Start your fitness journey today and achieve your goals with us.
                </Typography>
                <Button
                    component={Link}
                    to="/"
                    onClick={handleSignInWithGoogle}
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{
                        marginTop: '20px',
                        marginBottom:'10px',
                        backgroundColor: '#FF69B4',
                        color: '#fff',
                        // Adjust styles for smaller screens (md and below)
                        '@media (max-width: 960px)': {
                            marginTop: '10px',
                            fontSize: '14px',
                            marginBottom:'5px',
                            padding: '10px 20px',
                        },
                        // Adjust styles for even smaller screens (sm and below)
                        '@media (max-width: 600px)': {
                            marginTop: '5px',
                            marginBottom:'5px',
                            fontSize: '12px',
                            padding: '8px 16px',
                        }
                    }}
                >
                    Get Started
                </Button>
            </Container>
        </div>
    );
}

export default WelcomePage;
