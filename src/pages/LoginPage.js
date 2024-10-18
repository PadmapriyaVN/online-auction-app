import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Checkbox,
    FormControlLabel,
    Link,
    Divider,
    IconButton,
    Grid,
    InputAdornment,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GradientButton from '../components/GradientButton';
import LoginIllustration from '../assets/login-illustration.svg'; // Import your SVG file
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import CryptoJS from 'crypto-js';
import  { Encrypt_SecretKey } from '../helper/constants'
// Define the validation schema using yup
const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginPage = ({ onLogin }) => {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const navigate = useNavigate(); // Initialize the navigate function

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {


        console.log(data);

        // Encrypt the password before sending it to the backend
        const encryptedPassword = CryptoJS.AES.encrypt(data.password, Encrypt_SecretKey).toString();
        console.log('encryptedPassword', encryptedPassword);

        // Call your login API here
        onLogin({ name: 'olivia', email: data.email });
        navigate('/');
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                    md={5}
                    sx={{
                        p: 4,
                        bgcolor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Login
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: 2 }}>
                        Welcome back. Enter your credentials to access your account
                    </Typography>

                    {/* Form using react-hook-form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email TextField */}
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email Address"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                />
                            )}
                        />

                        {/* Password TextField */}
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    fullWidth
                                    margin="normal"
                                    type={showPassword ? 'text' : 'password'}
                                    error={!!errors.password}
                                    helperText={errors.password ? errors.password.message : ''}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />

                        {/* Keep signed in & Forgot password */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mt: 1,
                            }}
                        >
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Keep me signed in"
                            />
                            <Link href="#" variant="body2">
                                Forgot Password
                            </Link>
                        </Box>

                        {/* Submit Button */}
                        <GradientButton type="submit">
                            Continue
                        </GradientButton>
                    </form>

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

                    {/* Sign Up Link */}
                    <Box sx={{ textAlign: 'center', mt: 3 }}>
                        <Typography variant="body2">
                            Don't have an account?{' '}
                            <Link href="#" variant="body2">
                                Sign up here
                            </Link>
                        </Typography>
                    </Box>
                </Grid>

                {/* Right Side - SVG */}
                <Grid
                    item
                    xs={12}
                    md={7}
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
                            src={LoginIllustration}
                            alt="Login Illustration"
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LoginPage;
