import React, { useState } from "react";
import {
  Box,
  FormControl,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import michaelImg  from '../../assets/michael.jpg'
import { addSupplier } from "../../utils/axiosData";
import toast, { Toaster } from 'react-hot-toast';
import * as ReactBootStrap from "react-bootstrap";

const notify = () => {
  toast.success('Supplier added successfully!',{
    duration: 2666,
    position: "top-center",
    icon: '🔥',
    theme: {
      primary: 'green',
      secondary: 'black',
    }
  });
};

function AddSupplier() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newSupplierObj = {
      companyName: e.target.companyName.value,
      contactName: e.target.contactName.value,
      contactTitle: e.target.contactTitle.value,
      address: {
        city: e.target.city.value,
        country: e.target.country.value,
        postalCode: e.target.postalCode.value || undefined,
        street: e.target.street.value || undefined,
        region: e.target.region.value || undefined,
        phone: e.target.phone.value || undefined,
      },
    };
    try {
      setLoading(true);
      const addSupplierResponse = await addSupplier(newSupplierObj);
      if (
        addSupplierResponse.status === 200 ||
        addSupplierResponse.status === 201
      ) {
        e.target.reset();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };
  return (
    <Box>
      {loading ? (
              <Box style={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',height:'75vh'}}>
              <ReactBootStrap.Spinner  animation="border" />
            </Box>
      ) : (
       <>
        <Typography
        variant="h4"
        sx={{ textAlign: "center", my: "22px", fontWeight: "bolder" }}
      >
        Add New Supplier...
      </Typography>
      <FormControl sx={{ display: "block", width: "55%", margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <TextField id="companyName" name="companyName" disabled={loading} required label="Company Name" variant="standard" sx={{pr:'15px',pb:'35px'}} />
          <TextField id="contactName"  name="contactName" disabled={loading} required label="Contact Name" variant="standard" sx={{pr:'15px',pb:'35px'}}/>
          <TextField id="contactTitle" name="contactTitle" disabled={loading} required label="Contact Title" variant="standard" sx={{pr:'15px',pb:'35px'}}/>
          <TextField id="city" required  name="city" disabled={loading} label="City" variant="standard" sx={{pr:'15px',pb:'35px'}}/>
          <TextField id="country" required  name="country" disabled={loading} label="Country" variant="standard" sx={{pr:'15px',pb:'35px'}}/>
          <TextField id="country" label="Street" name="street" disabled={loading} variant="standard" sx={{pr:'15px',pb:'35px'}}/>
          <TextField id="region" label="Region" name="region" disabled={loading} variant="standard" sx={{pr:'15px',pb:'35px'}}/>
          <TextField id="postalCode" label="Postal Code" name="postalCode"  disabled={loading} type="number" variant="standard" sx={{pr:'15px',pb:'35px'}}/>
          <Box sx={{display:'flex',justifyContent:'center'}}>
          <TextField id="number" label="Phone Number" name="phone" disabled={loading} type="number" variant="standard" sx={{pr:'15px',pb:'35px',textAlign:'center',justifyContent:'center'}}/>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center'}} >
            <Button onClick={()=>{
               notify();
            }} disabled={loading} visible={loading} type="submit" variant="contained">Add Supplier</Button>
            <Toaster />
          </Box>
        </form>
      </FormControl>
      <Box sx={{display:'flex',justifyContent:'center',margin:'0 auto',width:{md:'60%',xs:'50%'},marginTop:'20px'}}>
        <Box sx={{width:{md:'31%',xs:'100%'}, height:"100%",borderRadius:'14px',overflow:'hidden',boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'}}>
          <img src={michaelImg}  width='100%' height="100%" alt="michael"/>
        </Box>
      </Box>
       </>
      )}
    </Box>
  );
}

export default AddSupplier;
