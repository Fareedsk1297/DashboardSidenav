import React from "react";
import SideNav from "../component/SideNav";
import { Box } from "@mui/material";
import Navbar from "../component/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "../Dash.css";
import AccordionDash from "../component/AccordionDash";
import BarChart from "../Chart/BarChart";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 149 }} className="gradient">
                  <CardContent>
                    <div>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $500.00
                    </Typography>
                    <Typography gutterBottom variant="body" component="div" sx={{color:"#ccd1d1"}}>
                    Total Earning
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 149 }} className="gradientLight">
                  <CardContent>
                    <div>
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $500.00
                    </Typography>
                    <Typography gutterBottom variant="body" component="div" sx={{color:"#ccd1d1"}}>
                    Total Orders
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2} direction="column">
                <Card sx={{ maxWidth: 345 }} className="gradientLight">
                  <Stack spacing={2} direction="row">
                    <div className="iconSet">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingAll">
                      <span style={{ fontWeight: "bolder" }}>$203k</span>
                      <br />
                      <span style={{ fontWeight: "inherit" }}>
                        Total Income
                      </span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <Stack spacing={2} direction="row">
                    <div className="iconSet">
                      <StorefrontIcon />
                    </div>
                    <div className="paddingAll">
                      <span style={{ fontWeight: "bolder" }}>$203k</span>
                      <br />
                      <span style={{ fontWeight: "inherit" }}>
                        Total Income
                      </span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 70 + "vh" }}>
                <CardContent>
                  <BarChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 70 + "vh" }}>
                <CardContent>
                <div className="paddingAll">
                      <span style={{ fontWeight: "bolder" }}>Popular Products</span>
                      
                    </div>
                  <AccordionDash/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
