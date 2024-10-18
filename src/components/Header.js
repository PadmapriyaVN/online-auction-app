import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { ReactComponent as Logo } from '../assets/logo.svg'; // Import your SVG logo
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; // Importing dropdown arrow icon
import TranslateIcon from '@mui/icons-material/Translate'; // Language icon
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserDropdown from './UserDropdown';
const Header = ({ user, onLogin }) => {
  // State for Auctions dropdown
  const [auctionsAnchorEl, setAuctionsAnchorEl] = React.useState(null);

  // State for Bidding dropdown
  const [biddingAnchorEl, setBiddingAnchorEl] = React.useState(null);

  // State for About Us dropdown
  const [aboutUsAnchorEl, setAboutUsAnchorEl] = React.useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorLangEl, setAnchorLangEl] = useState(null);

  // Handlers for opening and closing menus
  const handleAuctionsMenuClick = (event) => {
    setAuctionsAnchorEl(event.currentTarget);
  };

  const handleBiddingMenuClick = (event) => {
    setBiddingAnchorEl(event.currentTarget);
  };

  const handleAboutUsMenuClick = (event) => {
    setAboutUsAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAuctionsAnchorEl(null);
    setBiddingAnchorEl(null);
    setAboutUsAnchorEl(null);
  };


  const handleUserMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
      setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log('Logging out');
      // Trigger logout action
      setAnchorEl(null);
      onLogin(null);
      // Typically, you'd want to call a prop function from the parent to handle logging out
  };

  const handleLangClick = (event) => {
    setAnchorLangEl(event.currentTarget);
};

const handleLangClose = () => {
    setAnchorLangEl(null);
};

  return (
    <AppBar position="fixed" color="transparent" elevation={0} style={{ background: '#FFE5F1' }} >
      <Toolbar>
        {/* Logo and App Name */}

        <Box display="flex" alignItems="center" flexGrow={1}>
          <Logo style={{ width: '40px', height: '40px', marginRight: '10px' }} />
          <Link to="/" style={{ color: 'inherit', textDecoration:'none', fontFamily:'sans-serif', fontWeight:'bold', fontSize:'1.5rem' }}> Genix Auctions</Link>
          
        </Box>


        {/* Auctions Dropdown */}
        <Box display="flex" alignItems="center">
          <Button
            aria-controls="auctions-menu"
            aria-haspopup="true"
            onClick={handleAuctionsMenuClick}
            color="inherit"
            endIcon={<ArrowDropDownIcon />} // Add the dropdown icon next to text
            sx={{ fontSize: '.7rem' }} // Reduce font size for smaller screens
          >
            Auctions
          </Button>
          <Menu
            id="auctions-menu"
            anchorEl={auctionsAnchorEl}
            keepMounted
            open={Boolean(auctionsAnchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Live Auctions</MenuItem>
            <MenuItem onClick={handleMenuClose}>Upcoming Auctions</MenuItem>
            <MenuItem onClick={handleMenuClose}>Past Auctions</MenuItem>
          </Menu>
        </Box>

        {/* Other sections */}
        <Box display="flex" alignItems="center" marginRight="20px">
          {/* Bidding Dropdown */}
          <Box display="flex" alignItems="center">
            <Button
              aria-controls="bidding-menu"
              aria-haspopup="true"
              onClick={handleBiddingMenuClick}
              color="inherit"
              endIcon={<ArrowDropDownIcon />} // Add the dropdown icon next to text
              sx={{ fontSize: '.7rem' }} // Reduce font size for smaller screens
            >
              Bidding
            </Button>
            <Menu
              id="bidding-menu"
              anchorEl={biddingAnchorEl}
              keepMounted
              open={Boolean(biddingAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Current Bids</MenuItem>
              <MenuItem onClick={handleMenuClose}>Your Bids</MenuItem>
            </Menu>
          </Box>

          {/* About Us Dropdown */}
          <Box display="flex" alignItems="center">
            <Button
              aria-controls="about-us-menu"
              aria-haspopup="true"
              onClick={handleAboutUsMenuClick}
              color="inherit"
              endIcon={<ArrowDropDownIcon />} // Add the dropdown icon next to text
              sx={{ fontSize: '.7rem' }} // Reduce font size for smaller screens
            >
              About Us
            </Button>
            <Menu
              id="about-us-menu"
              anchorEl={aboutUsAnchorEl}
              keepMounted
              open={Boolean(aboutUsAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Our Team</MenuItem>
              <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
            </Menu>
          </Box>

          {/* Language switcher (basic example) */}
         
          <IconButton
                    color="inherit"
                    onClick={handleLangClick}
                    aria-controls="language-menu"
                    aria-haspopup="true"
                    sx={{ fontSize: '.7rem' }} // Reduce font size for smaller screens
                >
                    <TranslateIcon />English
                </IconButton>

                <Menu
                    id="language-menu"
                    anchorEl={anchorLangEl}
                    open={Boolean(anchorLangEl)}
                    onClose={handleLangClose}
                >
                    <MenuItem >
                        English
                    </MenuItem>
                    <MenuItem >
                        French
                    </MenuItem>
                    <MenuItem >
                        Spanish
                    </MenuItem>
                    {/* Add more languages as needed */}
                </Menu>
        </Box>

        {!user?.name ? (
          <>
            {/* Login and Get Started buttons */}
            <Button color="inherit" >
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
            </Button>
            <Button size="small" variant="contained">
              <Link to="/get-started" style={{ color: 'inherit', textDecoration: 'none' }}> Get started</Link>
            </Button>
          </>
        ) : (
          <>
            <UserDropdown user={user} onLogin={onLogin}/>

          </>)}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

