import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

//Components Importing
import {
  Navbar,
  HomePage,
  NotFound,
  ViewSuppliers,
  AddSupplier,
  SupplierDetail
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box>
        {/* Navbar Starts here */}
        <Navbar />
        {/* Main Content Starts here */}'
        <Box sx={{ pt: "58px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/view" element={<ViewSuppliers />} />
            <Route path="/supplier/:id" element={<SupplierDetail />} />
            <Route path="/add-supplier" element={<AddSupplier />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
