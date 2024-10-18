import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Paper, Box
} from '@mui/material';
import bidHistoryData from '../mock/bidHistory.json'; // Adjust the path as needed

const BidHistory = () => {
  const [bids, setBids] = useState(bidHistoryData); // Initialize with imported data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating a fetch delay
    const fetchBidHistory = async () => {
      setLoading(true);
      try {
        // Simulating a fetch delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setBids(bidHistoryData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBidHistory();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">Error: {error}</Typography>;
  }

  return (
    <div>
         <Box sx={{ p: 4, marginTop:'50px', marginBottom:'50px' }}>
      <Typography variant="h4" gutterBottom>Your Bid History</Typography>
      {bids.length === 0 ? (
        <Typography>No bids found.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Bid ID</TableCell>
                <TableCell>Item</TableCell>
                <TableCell>Bid Amount</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bids.map((bid) => (
                <TableRow key={bid.id}>
                  <TableCell>{bid.id}</TableCell>
                  <TableCell>{bid.itemName}</TableCell>
                  <TableCell>${bid.amount}</TableCell>
                  <TableCell>{new Date(bid.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      )}
      </Box>
    </div>
  );
};

export default BidHistory;
