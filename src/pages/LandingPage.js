import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import AuctionCard from './AuctionCard'; // Import the AuctionCard component
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import Image4 from '../assets/Image4.png';
import Image5 from '../assets/Image5.png';

import LandingPageIllustration from '../assets/LandingPage.svg'; // Import your SVG file

// Sample auction data (you can replace this with real data)
const auctionList = [
  {
    id: 1,
    title: 'Sony Black Headphones',
    minBid: 100,
    currentBid: 157,
    timeRemaining: '1 day 12 hrs 43 minutes',
    image: Image1, // Replace with your image URL
    status: 'Live Auction'
  },
  {
    id: 2,
    title: 'Apple AirPod 2nd Gen',
    minBid: 80,
    currentBid: 95,
    timeRemaining: '1 day 12 hrs 43 minutes',
    image: Image2, // Replace with your image URL
    status: 'Live Auction'
  },

  {
    id: 3,
    title: 'Mi 3i 2000mAh Power Bank',
    minBid: 40,
    currentBid: 46,
    timeRemaining: '1 day 12 hrs 43 minutes',
    image: Image4, // Replace with your image URL
    status: 'Live Auction'
  },
  {
    id: 4,
    title: 'Tribet Bluetooth Speaker',
    minBid: 10,
    currentBid: 15,
    timeRemaining: '1 day 12 hrs 43 minutes',
    image: Image3, // Replace with your image URL
    status: 'Live Auction'
  },
  {
    id: 5,
    title: 'WiFi Security Camera',
    minBid: 100,
    currentBid: 157,
    timeRemaining: '1 day 12 hrs 43 minutes',
    image: Image5, // Replace with your image URL
    status: 'Live Auction'
  }, 
    {
      id: 6,
      title: 'Sony Black Headphones',
      minBid: 100,
      currentBid: 157,
      timeRemaining: '1 day 12 hrs 43 minutes',
      image: Image1, // Replace with your image URL
      status: 'Live Auction'
    },
    {
      id: 7,
      title: 'Apple AirPod 2nd Gen',
      minBid: 80,
      currentBid: 95,
      timeRemaining: '1 day 12 hrs 43 minutes',
      image: Image2, // Replace with your image URL
      status: 'Live Auction'
    },
  
    {
      id: 8,
      title: 'Mi 3i 2000mAh Power Bank',
      minBid: 40,
      currentBid: 46,
      timeRemaining: '1 day 12 hrs 43 minutes',
      image: Image4, // Replace with your image URL
      status: 'Live Auction'
    },
    {
      id: 9,
      title: 'Tribet Bluetooth Speaker',
      minBid: 10,
      currentBid: 15,
      timeRemaining: '1 day 12 hrs 43 minutes',
      image: Image3, // Replace with your image URL
      status: 'Live Auction'
    },
    {
      id: 10,
      title: 'WiFi Security Camera',
      minBid: 100,
      currentBid: 157,
      timeRemaining: '1 day 12 hrs 43 minutes',
      image: Image5, // Replace with your image URL
      status: 'Live Auction'
    },
  // Add more items here
];


function LandingPage({ user }) {
  
  return (
    <Box sx={{ mt: 8, textAlign: "center" }}>
      {!user?.name ? (
        <>
          <Box sx={{ width: '100%', height: '100%' }}>
            <img
              src={LandingPageIllustration} // Use the imported SVG file
              alt="Landing Page Illustration"

              style={{
                objectFit: 'cover',
                width: '100%',
                height: '50%',

              }}
            />
          </Box>
          <Box sx={{ maxWidth: '1200px', p: 3, marginBottom: '50px' }}>
            {/* Heading */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'left' }}>
              Explore <span style={{ color: '#1976D2' }}>Auctions</span>
            </Typography>

            {/* Auction List */}
            <Grid container spacing={1}>
              {auctionList.map((auction) => (
                <Grid key={auction.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2.4} // Fits 5 cards in a row on large screens
                >
                  <AuctionCard auction={auction} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      ) : (
        <>
         <Box sx={{ maxWidth: '1200px', p: 3, marginBottom: '50px' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'left' }}>
            Welcome <span style={{ color: '#1976D2' }}>{user?.name}!</span>
          </Typography>

          {/* Auction List */}
          <Grid container spacing={1}>
              {auctionList.map((auction) => (
                <Grid key={auction.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2.4} // Fits 5 cards in a row on large screens
                >
                  <AuctionCard auction={auction} />
                </Grid>
              ))}
            </Grid>
            </Box>
        </>
      )}
    </Box>
  );
}

export default LandingPage;
