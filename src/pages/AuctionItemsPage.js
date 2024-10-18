import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
const AuctionItemsPage = () => {
// Default auction items
const defaultAuctions = [
  {
    id: 1,
    title: 'Vintage Car',
    description: 'A classic vintage car from 1960, in mint condition.',
    startingBid: '15000',
    bidStartDate: dayjs(), // Use dayjs for default date
  },
  {
    id: 2,
    title: 'Antique Vase',
    description: 'A beautiful antique vase from the 19th century.',
    startingBid: '500',
    bidStartDate: dayjs(),
  },
];

// Initialize state with default auctions
const [auctions, setAuctions] = useState(defaultAuctions);
const [formData, setFormData] = useState({
  id: null,
  title: '',
  description: '',
  startingBid: '',
  bidStartDate: dayjs(), // Default to current date-time
});
const [isEditing, setIsEditing] = useState(false);

// Handle input changes for text fields
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// Handle changes for the DateTimePicker
const handleDateChange = (newValue) => {
  setFormData({ ...formData, bidStartDate: newValue });
};

// Handle form submission (Create or Update)
const handleSubmit = (e) => {
  e.preventDefault();
  if (isEditing) {
    updateAuction(formData);
  } else {
    createAuction(formData);
  }
  clearForm();
};

// Create a new auction
const createAuction = (auction) => {
  setAuctions([...auctions, { ...auction, id: Date.now() }]); // Add new auction with a unique id
};

// Update an existing auction
const updateAuction = (updatedAuction) => {
  const updatedAuctions = auctions.map((auction) =>
    auction.id === updatedAuction.id ? updatedAuction : auction
  );
  setAuctions(updatedAuctions);
  setIsEditing(false);
};

// Delete an auction
const deleteAuction = (id) => {
  const filteredAuctions = auctions.filter((auction) => auction.id !== id);
  setAuctions(filteredAuctions);
};

// Handle edit action
const editAuction = (auction) => {
  setFormData(auction);
  setIsEditing(true);
};

// Clear form fields
const clearForm = () => {
  setFormData({
    id: null,
    title: '',
    description: '',
    startingBid: '',
    bidStartDate: dayjs(), // Reset to current date-time
  });
  setIsEditing(false);
};


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{ p: 4, marginTop:'50px', marginBottom:'50px' }}>
      {/* Auction Form */}
      <Typography variant="h4" gutterBottom>
        {isEditing ? 'Edit Auction' : 'Create Auction'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Auction Title"
              name="title"
              variant="outlined"
              fullWidth
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Starting Bid"
              name="startingBid"
              variant="outlined"
              fullWidth
              type="number"
              value={formData.startingBid}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Description"
              name="description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            {/* DateTimePicker for Bid Start Date */}
            <DateTimePicker
              label="Bid Start Date"
              value={formData.bidStartDate}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField {...params} fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {isEditing ? 'Update Auction' : 'Create Auction'}
            </Button>
            {isEditing && (
              <Button onClick={clearForm} variant="outlined" sx={{ ml: 2 }}>
                Cancel
              </Button>
            )}
          </Grid>
        </Grid>
      </form>

       {/* Auction List */}
       <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Auction List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Starting Bid</TableCell>
                <TableCell>Bid End Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {auctions.map((auction) => (
                <TableRow key={auction.id}>
                  <TableCell>{auction.title}</TableCell>
                  <TableCell>{auction.description}</TableCell>
                  <TableCell>${auction.startingBid}</TableCell>
                  <TableCell>{dayjs(auction.bidStartDate).format('DD/MM/YYYY HH:mm')}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => editAuction(auction)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deleteAuction(auction.id)} color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    </LocalizationProvider>
  );
};

export default AuctionItemsPage;
