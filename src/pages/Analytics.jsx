import React from 'react'
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
import { PieChart } from '../Chart/PieChart';
import { HorizontalBarChart } from '../Chart/HorizontalBarChart';

export default function Analytics() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Stack spacing={2} direction="row">
                <Card sx={{ maxWidth: 345}} className="gradient">
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
                <Card sx={{ maxWidth: 345 }} className="gradientLight">
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
            <Grid item xs={7}>
                <Card sx={{ maxWidth: 345 }} >
                <HorizontalBarChart/>
                </Card>
                
               
            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 70 + "vh" }}>
                <CardContent>
                
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 70 + "vh" }}>
                <CardContent>
                {/* <div className="paddingAll">
                      <span style={{ fontWeight: "bolder" }}>Popular Products</span>
                      
                    </div> */}
                    <PieChart/>
                 
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
