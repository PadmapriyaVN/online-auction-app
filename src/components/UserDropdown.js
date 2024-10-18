import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem, Typography, Box, Divider } from '@mui/material';
import AvatarUser from '../assets/Avatar.svg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const UserDropdown = ({ user, onLogin }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate(); // Initialize the navigate function
    const { name, email } = user;


    // Open menu when clicking the avatar
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Close menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        console.log('Logging out');
        // Trigger logout action
        setAnchorEl(null);
        onLogin(null);
        navigate('/');
    };

    return (
        <Box>
            {/* User avatar as button to trigger menu */}
            <Button onClick={handleClick} sx={{ p: 0 }}>
                <Avatar
                    alt="User Name"
                    src={AvatarUser} // Use user's image URL here
                    sx={{ width: 40, height: 40 }}
                />
            </Button>

            {/* Dropdown menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                    elevation: 4,
                    sx: {
                        overflow: 'visible',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* User information */}
                <MenuItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Avatar
                        alt="User Name"
                        src={AvatarUser}
                        sx={{ width: 48, height: 48, mb: 1 }}
                    />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{email}</Typography>
                </MenuItem>
                <Divider />

                {/* Menu items */}
                <MenuItem onClick={() => navigate('/profile')}>View Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={() => navigate('/bid-history')}>My Bids</MenuItem>
                <MenuItem onClick={handleClose}>Credit Cards</MenuItem>
                <MenuItem onClick={() => navigate('/auction-items')}>My Auctions</MenuItem>
                <MenuItem onClick={handleClose}>Invite Colleagues</MenuItem>
                <MenuItem onClick={handleClose}>Notifications</MenuItem>
                <MenuItem onClick={handleClose}>Community</MenuItem>
                <MenuItem onClick={handleClose}>Support</MenuItem>
                <MenuItem onClick={handleClose}>API</MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout} sx={{ color: 'red' }}>Log Out</MenuItem>
            </Menu>
        </Box>
    );
};

export default UserDropdown;
