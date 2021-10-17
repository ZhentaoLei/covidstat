import React from "react";
import { Typography } from "@material-ui/core";

const Region = (navigation) => {
  return (
    <div>
      <h1>Charts</h1>
      <Typography onPress={() => navigation.navigate("Home")}>
        Region
      </Typography>
    </div>
  );
};

export default Region;
