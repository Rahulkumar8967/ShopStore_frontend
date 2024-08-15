import React from "react";
import { Grid, Link, Typography,button } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white mt-10 text-center"
      container
      sx={{ bgcolor: "black", color: "white", py: 3 }}
    >
      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Company
        </Typography>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            About
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Blog
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Press
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Jobs
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Partners
          </button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Solutions
        </Typography>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Marketing
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Analytics
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Commerce
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Insights
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Support
          </button>
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Documentations
        </Typography>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Guides
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            API States
          </button>
        </div>

      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography className="pb-5" variant="h6">
          Legal
        </Typography>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Claim
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Privacy
          </button>
        </div>

        <div>
          <button variant="text" className="pb-5" gutterBottom>
            Terms
          </button>
        </div>

       
        
      </Grid>

      <Grid className="pt-20" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
          <p>BY Rahul Kumar Saini</p>
        </Typography>
       
      </Grid>
    </Grid>
  );
};
export default Footer;
