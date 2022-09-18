import { Box } from '@mui/material'
import React from 'react'
import errorPageImg from '../../assets/errorpage.png'

function NotFound() {
  return (
    <Box sx={{textAlign:'center'}}>
      <h4 style={{margin:'30px 0',fontWeight:'bolder'}}>You got something wrong...</h4>
      <Box sx={{width:'63%',display:'flex',justifyContent:'center',margin:'0 auto',borderRadius:'15px',overflow:'hidden',boxShadow:'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;'}}>
        <img width='100%' src={errorPageImg} alt="error page"/>
      </Box>
    </Box>
  )
}

export default NotFound