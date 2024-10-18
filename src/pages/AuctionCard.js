import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Button,
    Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AuctionCard = ({ auction }) => {
     const navigate = useNavigate(); // Initialize the navigate function

    return (
        <Card sx={{ minWidth: 200, m: 2 }}>
            {/* Auction Image */}
            <CardMedia
                component="img"
                height="140"
                image={auction.image}
                alt={auction.title}
                sx={{
                    objectFit: 'contain', // Ensures the entire image is shown
                    padding: 1, // Adds some padding for visual spacing

                }}
            />

            {/* Auction Details */}
            {/* Content */}
            <CardContent>
                {/* Left Aligned Chip */}
                <Box sx={{ mb: 1,  }}>
                <Chip label="Live Auction" testAlign='left' sx={{
        
          backgroundColor: '#21A67A',
          color: 'white',
          fontSize: '12px',
          padding: '8px',
          borderRadius: '12px', // Rounded corners
        }} /> 
                
                </Box>
                

                {/* Auction Title */}
                <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                    {auction.title}
                </Typography>

                {/* Auction Details (Minimum Bid, Current Bid, Time Remaining) */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    {/* Left-aligned "Minimum Bid" text */}
                    <Typography variant="body2" color="text.secondary">
                        Minimum Bid:
                    </Typography>

                    {/* Right-aligned amount in bold */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        ${auction.minBid}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    {/* Left-aligned "Minimum Bid" text */}
                    <Typography variant="body2" color="text.secondary">
                        Current Bid:
                    </Typography>

                    {/* Right-aligned amount in bold */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        ${auction.currentBid}
                    </Typography>
                </Box>

               
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', mt: 1 }}>
                    Ends in: {auction.timeRemaining}
                </Typography>


            </CardContent>
           
            {/* Bid Button */}
            <Box sx={{ p: 2, textAlign: 'center' }}>
                <Button variant="contained"  fullWidth size="small"
                 sx={{                   
                    py: 1.5,
                    background: 'linear-gradient(to right, #DB2721, #5AD7FE)', // Blue gradient
                    color: 'white',                 
                   
                  }}
                  onClick={() => navigate('/product-auction')}>
                    {'Bid Now >'}
                </Button>
            </Box>
        </Card>
    );
};

export default AuctionCard;
