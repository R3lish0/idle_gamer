import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import BGimage from "../assets/background.gif"

export default function Root() {
  return (
    <Box sx={{height:'100vh',width:"100wh",backgroundImage:`url(${BGimage})`,backgroundPosition:"bottom 1000px right 1000px"}}>
      <Box sx={{width:"50%",margin:"auto",paddingTop:"15em"}}>
        <Typography variant="h3" sx={{textAlign:"center",marginBottom:"0.5em"}}>Monkee Game</Typography>
        <Stack spacing={4} sx={{maxWidth:"25em",margin:"auto"}}>
        <Button variant="contained" href="/WorldOne" sx={{height:"5em",backgroundColor:"#1E555C"}}><Typography variant="h5" style={{fontWeight:"bold",margin:"auto",marginTop:"0.7em"}}>Start</Typography></Button>
        <Button variant="contained" href="/Settings" sx={{height:"5em",backgroundColor:"#EDB183"}}><Typography variant="h5" style={{fontWeight:"bold",margin:"auto",marginTop:"0.7em"}}>Settings</Typography></Button>
        <Button variant="contained" href="/Quit" sx={{height:"5em",backgroundColor:"#F15152"}}><Typography variant="h5" style={{fontWeight:"bold",margin:"auto",marginTop:"0.7em"}}>Quit</Typography></Button>
        </Stack>  
      </Box>
    </Box>
  );
}