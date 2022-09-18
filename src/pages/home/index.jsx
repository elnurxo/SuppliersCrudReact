import React, { useState } from 'react'
import { Box,Typography } from '@mui/material';
import homeImage from '../../assets/dwight.jpg'
import * as ReactBootStrap from "react-bootstrap";

function HomePage() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 400);
  return (
    <Box sx={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>
    {loading ? (
      <Box style={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',height:'75vh'}}>
        <ReactBootStrap.Spinner  animation="border" />
      </Box>
    ) : (
      <Box sx={{height:'100%'}}>
      <Typography sx={{textAlign:'center',marginTop:'45px'}}>
        <span style={{fontSize:"24px"}}>It's Home Page, nothing much in here...</span>
      </Typography>
      <Box sx={{backgroundColor:'black',textAlign:'center',borderRadius:'10px',width:{md:"55%",sm:'75%',xs:'90%',},height:'100%',margin:'0 auto',overflow:'hidden',boxShadow:'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;'}}>
        <img  height='100%' width="100%" src={homeImage} alt='home page img' style={{objectFit:'cover'}}/>
      </Box>
    </Box>
    )}
    </Box>
  )
}

export default HomePage