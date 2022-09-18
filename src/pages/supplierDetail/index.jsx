import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSupplierById } from "../../utils/axiosData";
import * as ReactBootStrap from "react-bootstrap";
import supplierDetailImg from "../../assets/supplierdetail.jpg";

function SupplierDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [supplier, setSupplier] = useState();

 

  useEffect(() => {
    const getSupplier = async () => {
      try {
        setLoading(true);
        const getSupplierByIdResponse = await getSupplierById(id);
        if (
          getSupplierByIdResponse.status === 200 &&
          getSupplierByIdResponse.data
        ) {
          setSupplier(getSupplierByIdResponse.data);
        } else {
          navigate("/not-found");
        }
        setLoading(false);
      } catch (err) {
        navigate("/not-found");
      }
    };
    getSupplier();
  },[id,navigate]);
  return (
    <Box>
      {loading ? (
        <Box
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "75vh",
          }}
        >
          <ReactBootStrap.Spinner animation="border" />
        </Box>
      ) : (
        <Fragment>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "30px",
              my: "20px",
            }}
          >
            Supplier Detail / id: {supplier?.id}
          </Typography>
          <Box
            sx={{
              border: "1px dotted black",
              width: { md: "50%", sm: "70%", xs: "80%" },
              textAlign: "left",
              margin: "0 auto",
              p: "30px",
              borderRadius: "12px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
            }}
          >
            <div>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                Company Name:{" "}
              </span>{" "}
              {supplier?.companyName}
            </div>
            <div>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                Contact Name:{" "}
              </span>
              {supplier?.contactName}
            </div>
            <div>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                Contact Title:{" "}
              </span>{" "}
              {supplier?.contactTitle}
            </div>
            <div>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                City:{" "}
              </span>{" "}
              {supplier?.address.city}
            </div>
            <div>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                Country:{" "}
              </span>{" "}
              {supplier?.address.country}
            </div>
            <div>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                Region:{" "}
              </span>{" "}
              {supplier?.address.region}
            </div>
            <div>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                Postal Code:{" "}
              </span>{" "}
              {supplier?.address.postalCode}
            </div>
            <div style={{ marginBottom: "24px" }}>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  color: "darkred",
                }}
              >
                Phone:{" "}
              </span>{" "}
              {supplier?.address.phone}
            </div>
            <Link to="/view">
              <Button
                sx={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
                type="button"
                variant="contained"
              >
                Go Back
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              width: { md: "18%", xs: "64%" },
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
              marginTop: "10px",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <img width="100%" src={supplierDetailImg} alt="suppler detail" />
          </Box>
        </Fragment>
      )}
    </Box>
  );
}

export default SupplierDetail;
