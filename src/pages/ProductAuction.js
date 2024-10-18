import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, List, ListItem, TextField, ListItemText, Button, Avatar, Modal, IconButton, Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Add, Remove, Close } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Image1 from '../assets/Image1.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Alert from '@mui/material/Alert';
const auctionData = {
    product: "Sony Black Headphones",
    minBid: "$100",
    currentBid: "$165",
    timeRemaining: "1 day 12 hrs 43 minutes",
    image: Image1, // Replace with actual image URL
};

const bids = [
    { id: 1, bid: "$157", bidder: "The Floor" },
    { id: 2, bid: "$150", bidder: "The Floor" },
    { id: 3, bid: "$145", bidder: "Internet Bidder" },
    { id: 4, bid: "$140", bidder: "The Floor" },
    { id: 5, bid: "$132", bidder: "Internet Bidder" },
];

const reviews = [
    {
        id: 1,
        name: 'Kirstin Watson',
        date: 'March 14, 2021',
        avatar: 'https://via.placeholder.com/40',
        rating: 5,
        review: 'These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm.',
    },
    {
        id: 2,
        name: 'Jenny Wilson',
        date: 'January 28, 2021',
        avatar: 'https://via.placeholder.com/40',
        rating: 5,
        review: 'I\'m blown away by the sound clarity these headphones offer.',
    },
    {
        id: 3,
        name: 'Bessie Cooper',
        date: 'December 10, 2020',
        avatar: 'https://via.placeholder.com/40',
        rating: 4,
        review: 'As a frequent flyer, these headphones have become my must-have travel companion.',
    },
];

// Modal style using MUI's sx prop
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};
const ProductAuction = ({ user }) => {
    const [openSuccess, setOpenSuccess] = useState(false);

    const handleSuccessOpen = () => {
        handleClose();
        setOpenSuccess(true);
    }
    const handleSuccessClose = () => setOpenSuccess(false);

    const [open, setOpen] = useState(false);
    const [straightBid, setStraightBid] = useState(0);
    const [maxBid, setMaxBid] = useState(0);
    const minBid = 100;
    const currentBid = 157;
    const endTime = '1 day 12 hrs 43 minutes';

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleStraightBidChange = (increment) => {
        setStraightBid((prev) => Math.max(minBid, prev + increment));
    };

    const handleMaxBidChange = (increment) => {
        setMaxBid((prev) => Math.max(minBid, prev + increment));
    };
    return (
        <>
            {!user?.name ? (
                <>  <Box sx={{ p: 4, marginTop: '50px', marginBottom: '50px' }}>
                    <Alert severity="info">Please Login to start Bidding!</Alert>
                </Box></>
            ) : (
                <>


                    <Box p={4} sx={{ paddingTop: '100px' }}>
                        <Grid container spacing={4}>
                            {/* Auction Card */}
                            <Grid item xs={12} md={3}>
                                <Box mb={2}>
                                    <Button
                                        component={Link}
                                        to="/"
                                        startIcon={<ArrowBackIcon />}
                                        variant="text"
                                        color="primary"
                                        sx={{ mb: 2 }}
                                    >
                                        Back to catalog
                                    </Button>
                                </Box>
                                <Card>
                                    <CardContent>
                                        <img src={auctionData.image} alt={auctionData.product} width="100%" />
                                        {/* Auction Title */}
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                                            {auctionData.product}
                                        </Typography>

                                        {/* Auction Details (Minimum Bid, Current Bid, Time Remaining) */}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                            {/* Left-aligned "Minimum Bid" text */}
                                            <Typography variant="body2" color="text.secondary">
                                                Minimum Bid:
                                            </Typography>

                                            {/* Right-aligned amount in bold */}
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                {auctionData.minBid}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                                            {/* Left-aligned "Minimum Bid" text */}
                                            <Typography variant="body2" color="text.secondary">
                                                Current Bid:
                                            </Typography>

                                            {/* Right-aligned amount in bold */}
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                                {auctionData.currentBid}
                                            </Typography>
                                        </Box>


                                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', mt: 1 }}>
                                            Ends in: {auctionData.timeRemaining}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Product Description */}
                            <Grid item xs={12} md={6}>
                                <Box mb={3}>
                                    <Typography variant="h5" gutterBottom>Description</Typography>
                                    <Typography variant="body1" paragraph>
                                        Immerse yourself in pristine sound quality with the Sony Black Headphones. Crafted for audiophiles and casual listeners alike, these headphones deliver an exceptional audio experience with deep, resonant bass and crystal-clear highs. The sleek black design complements any style, whether you're on the go or relaxing at home.
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        Equipped with advanced noise-canceling technology, these headphones block out distractions so you can enjoy your music, podcasts, or calls without interference. Comfort is key with plush ear cushions that provide long-lasting comfort for extended listening sessions.
                                    </Typography>
                                </Box>

                                {/* Reviews */}
                                <Box>
                                    <Typography variant="h5" gutterBottom>Reviews</Typography>
                                    {reviews.map((review) => (
                                        <Box key={review.id} mb={2}>
                                            <Card>
                                                <CardContent>
                                                    <Grid container spacing={2}>
                                                        <Grid item>
                                                            <Avatar src={review.avatar} alt={review.name} />
                                                        </Grid>
                                                        <Grid item xs>
                                                            <Typography variant="h6">{review.name}</Typography>
                                                            <Typography color="textSecondary">{review.date}</Typography>
                                                            <Rating value={review.rating} readOnly />
                                                            <Typography variant="body1" mt={1}>
                                                                {review.review}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            {/* Bids List */}
                            <Grid item xs={12} md={3}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom>Your bid is {auctionData.currentBid}</Typography>
                                        <List>
                                            {bids.map((bid) => (
                                                <ListItem key={bid.id}>
                                                    <ListItemText primary={`${bid.bidder} bids ${bid.bid}`} />
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Button variant="contained" color="primary" fullWidth onClick={handleOpen}>
                                            Bid now
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="submit-bid-title"
                        aria-describedby="submit-bid-description"
                    >
                        <Box sx={style}>
                            {/* Close Icon */}
                            <IconButton
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                }}
                            >
                                <Close />
                            </IconButton>

                            {/* Modal Title */}
                            <Typography id="submit-bid-title" variant="h6" component="h2">
                                Submit Bid | Sony Black Headphones
                            </Typography>
                            <Divider sx={{ my: 3 }}></Divider>
                            {/* Straight Bid Section */}
                            <Box mt={2} display="flex" alignItems="center">
                                <Typography flex={1}>Straight bid</Typography>
                                <IconButton onClick={() => handleStraightBidChange(-1)}>
                                    <Remove />
                                </IconButton>
                                <TextField
                                    type="number"
                                    value={straightBid}
                                    onChange={(e) => setStraightBid(Number(e.target.value))}
                                    inputProps={{ min: minBid }}
                                    sx={{ width: 80, mx: 1 }}
                                />
                                <IconButton onClick={() => handleStraightBidChange(1)}>
                                    <Add />
                                </IconButton>
                            </Box>

                            {/* Maximum Bid Section */}
                            <Box mt={2} display="flex" alignItems="center">
                                <Typography flex={1}>Maximum bid</Typography>
                                <IconButton onClick={() => handleMaxBidChange(-1)}>
                                    <Remove />
                                </IconButton>
                                <TextField
                                    type="number"
                                    value={maxBid}
                                    onChange={(e) => setMaxBid(Number(e.target.value))}
                                    inputProps={{ min: minBid }}
                                    sx={{ width: 80, mx: 1 }}
                                />
                                <IconButton onClick={() => handleMaxBidChange(1)}>
                                    <Add />
                                </IconButton>
                            </Box>

                            {/* Bid Details */}
                            <Box mt={2}>
                                <Typography>Minimum Bid: ${minBid}</Typography>
                                <Typography>Current Bid: ${currentBid}</Typography>
                                <Typography>Ends in: {endTime}</Typography>
                            </Box>

                            {/* Submit Button */}
                            <Box mt={3} display="flex" justifyContent="flex-end">
                                <Button variant="contained" onClick={() => handleSuccessOpen()}>
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                    </Modal>
                    {/* Modal */}
      <Modal
        open={openSuccess}
        onClose={handleSuccessClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal Content */}
          <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
            Submit Bid | Sony Black Headphones
          </Typography>

          {/* Success Icon */}
          <CheckCircleIcon color="success" sx={{ fontSize: 50, mb: 2 }} />

          {/* Success Message */}
          <Typography id="modal-description" sx={{ mb: 1 }}>
            Bid submitted successfully!
          </Typography>
          <Typography>Thank you!</Typography>
        </Box>
      </Modal>
                </>
            )}
        </>
    );
};

export default ProductAuction;
