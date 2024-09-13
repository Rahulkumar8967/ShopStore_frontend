import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";

const OrderCart = () => {
  return (
    <div className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/trouser/c/v/m/34-el-p-cot-el-cielo-original-imaggu7jtfyrv5sc.jpeg?q=70&crop=false"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men Slim Rise Black Formal</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Black</p>
            </div>
          </div>
        </Grid>

        <Grid>
          <p item xs={2}>
            ₹799
          </p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-700 mr-2 text-sm"
                />
                <span>Delivered on sept 15</span>
              </p>

              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}

          {false && (
            <p>
              <span>Expected Delivery On sept 15 </span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCart;
