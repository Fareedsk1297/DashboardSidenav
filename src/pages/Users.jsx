import { Box } from "@mui/material";
import React from "react";
import SideNav from "../component/SideNav";
import Navbar from "../component/Navbar";

export default function Users() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Users</h1>
        </Box>
      </Box>
    </>
  );
}
