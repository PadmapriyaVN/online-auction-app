import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import SignUpIllustration from '../assets/signup-success.svg'; // Import your SVG file
import GradientButton from '../components/GradientButton';
import { Link } from 'react-router-dom';
function SignupSuccessPage() {

    return (
        <Box
            sx={{
                minHeight: '100vh', // Ensure the entire view is covered
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,              
            }}
        >
            <Grid
                container
                sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    minHeight: '100vh', // Container has 100% viewport height
                    overflow: 'hidden',
                }}
            >
                {/* Left Side - Form */}
                <Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        p: 4,
                        bgcolor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >

                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'left' }}>
                        Uncover Deals, Unleash Excitement: <span style={{ color: '#1976D2' }}>Dive into Our Auctions Today!
                        </span>
                    </Typography>
                    <Box >
                        <img
                            src={SignUpIllustration} // Use the imported SVG file
                            alt="Signup Page Illustration"
                            style={{
                                width: '50%', // Set a specific width percentage or fixed size
                                height: 'auto' // Keep the aspect ratio
                            }}
                        />
                    </Box>
                    <Button size="small" variant="contained" sx={{ width: '100px' }}>
                        <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}> Login now</Link>
                    </Button>
                </Grid>

            </Grid>


        </Box>
    );
}

export default SignupSuccessPage;
