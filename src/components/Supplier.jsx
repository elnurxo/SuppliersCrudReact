import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteSupplierById, getSuppliers } from "../utils/axiosData";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import toast, { Toaster } from 'react-hot-toast';
import * as ReactBootStrap from "react-bootstrap";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const notify = () => toast.success('Supplier deleted successfully!',{
  duration: 2666,
  position: "top-center",
  icon: '👏',
  theme: {
    primary: 'green',
    secondary: 'black',
  }
});

function Supplier() {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getAndSetSuppliers = async () => {
      try {
        setLoading(true);
        const getSupplierResponse = await getSuppliers();
        if (getSupplierResponse.status === 200) {
          setSuppliers(getSupplierResponse.data);
        } else {
          navigate("/not-found");
          setSuppliers([]);
        }
        setLoading(false);
      } catch (err) {
        setSuppliers([]);
        navigate("/not-found");
      }
    };
    getAndSetSuppliers();
  }, [navigate]);

  const getAndSetSuppliers = async () => {
    try {
      setLoading(true);
      const getSupplierResponse = await getSuppliers();
      if (getSupplierResponse.status === 200) {
        setSuppliers(getSupplierResponse.data);
      } else {
        navigate("/not-found");
        setSuppliers([]);
      }
      setLoading(false);
    } catch (err) {
      setSuppliers([]);
      navigate("/not-found");
    }
  };
  const deleteSupplierEvent = async (id) => {
    try {
      const deleteSupplierResponse = await deleteSupplierById(id);
      if (deleteSupplierResponse.status === 200) {
        getAndSetSuppliers();
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box sx={{ width: "90%", margin: "0 auto", marginTop: "20px" }}>
      {loading ? (
        <Box style={{textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',height:'75vh'}}>
          <ReactBootStrap.Spinner  animation="border" />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Supplier ID</StyledTableCell>
                <StyledTableCell align="right">Company Name</StyledTableCell>
                <StyledTableCell align="right">Contact Name</StyledTableCell>
                <StyledTableCell align="right">Contact Title</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Delete Supplier</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliers.map((supplier) => (
                <StyledTableRow
                  key={supplier.id}
                  onClick={() => navigate(`/supplier/${supplier.id}`)}
                >
                  <StyledTableCell component="th" scope="row">
                    {supplier.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {supplier.companyName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {supplier.contactName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {supplier.contactTitle}
                  </StyledTableCell>
                  <StyledTableCell align="right">{`${supplier.address?.city}, ${supplier.address?.country}`}</StyledTableCell>
                  <StyledTableCell align="right">
                    {" "}
                    <Button  onClick={(e) => {
                      e.stopPropagation();
                      deleteSupplierEvent(supplier.id);
                      notify();
                    }} variant="outlined" startIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                    <Toaster />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Supplier;
