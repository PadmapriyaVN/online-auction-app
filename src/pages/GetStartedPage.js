import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Grid,  Divider, } from '@mui/material';
import GetStartedIllustration from '../assets/get-started-illustration.svg'; // Import your SVG file
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GradientButton from '../components/GradientButton'; // Import the GradientButton
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import  CryptoJS from 'crypto-js';
import  { Encrypt_SecretKey } from '../helper/constants'
// Validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  receiveEmails: yup.boolean(),
});

const GetStartedPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Initialize form with React Hook Form and Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => {
    console.log(data);
    
     // Encrypt the password before sending it to the backend
     const encryptedPassword = CryptoJS.AES.encrypt(data.password, Encrypt_SecretKey).toString();
     console.log('encryptedPassword', encryptedPassword);
    // Call your sign-up API here
    navigate('/signup-success');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh', // Ensure the entire view is covered
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        paddingTop: '64px', // Account for the fixed header
        paddingBottom: '64px', // Account for the fixed header
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
          md={4}
          sx={{
            p: 4,
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Form Heading */}
          <Typography variant="h5" component="h1" gutterBottom>
            Sign up
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            New bidders, as soon as you have submitted your information you will be eligible to bid in the auction.
          </Typography>

          {/* Form fields */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* First Name */}
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />

            {/* Last Name */}
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />

            {/* Email Address */}
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            {/* Password */}
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            {/* Receive Emails */}
            <FormControlLabel
              control={<Checkbox {...register('receiveEmails')} color="primary" />}
              label="Receive outbid emails"
            />

            {/* Submit Button */}
            <GradientButton
              type="submit"
             
            >
              Submit
            </GradientButton>
          </form>

          {/* Other sign-up options */}
          {/* Divider and Social Login */}
          <Divider sx={{ my: 3 }}>or sign up with</Divider>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            variant="outlined"
                            startIcon={<GoogleIcon sx={{ color: 'black' }} />}
                            sx={{ mx: 1, color: 'black', borderColor: 'black' }}
                            size="small"
                        >
                            Google
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<AppleIcon sx={{ color: 'black' }} />}
                            sx={{ mx: 1, color: 'black', borderColor: 'black' }}
                            size="small"
                        >
                            Apple
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<FacebookIcon sx={{ color: 'black' }} />}
                            sx={{ mx: 1, color: 'black', borderColor: 'black' }}
                            size="small"
                        >
                            Facebook
                        </Button>
                    </Box>

          {/* Auction Rules Link */}
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Typography variant="body2">
              Want to know more? <a href="/auction-rules">Auction rules</a>
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - SVG */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',

            pt: 10,
            m: 0,
          }}
        >
          <Box sx={{ width: '100%', height: '100%' }}>
            <img
              src={GetStartedIllustration} // Use the imported SVG file
              alt="Get Started Illustration"
             
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '50%',
              
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>

  );
};

export default GetStartedPage;
