import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Grid, Divider } from '@mui/material';

import GradientButton from '../components/GradientButton'; // Import the GradientButton
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

// Validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  receiveEmails: yup.boolean(),
});

const ProfilePage = () => {
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
            Update Profile
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Update your personal details below. Please note that your email address cannot be changed.
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
            <GradientButton type="submit">
              Update Profile
            </GradientButton>
          </form>

          {/* Divider */}
          <Divider sx={{ my: 3 }} />

          {/* Optionally add additional content here */}

        </Grid>

       
      </Grid>
    </Box>
  );
};

export default ProfilePage;
