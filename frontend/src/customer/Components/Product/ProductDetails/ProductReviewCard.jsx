import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import { Rating, Box, Grid } from "@mui/material";

const ProductReviewCard = ({item}) => {
  const [value, setValue] = React.useState(4.5);
  const [Letter, setletter] = React.useState("null");
  const [Date, setDate] = React.useState("null");
  useEffect(() => {
    setValue(item?.rating)
    setletter(item.user.firstName?.[0]?.toUpperCase()??"null")
    setDate(item.user?.createdAt?.split('T')[0]??"null")
    console.log(Letter);
    
});
  return (
    <div className="" >
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
            >
              
              <p>{Letter}</p>
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={8} sx={{ mr: 5 }}>
          <div className="space-y-2 ml-2">
            <div className="">
              <p className="font-semibold text-lg">{item.user?.firstName}</p>
              <p className="opacity-70">{Date}</p>
            </div>
            <div>

              <Rating
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
             
            </div>
            <p>
              {item?.review}
            </p>
          </div>
        </Grid>
      </Grid>
      <br/>
      <hr></hr>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
