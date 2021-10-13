import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CssBaseline from "@mui/material/CssBaseline";
import ShowChart from "@mui/icons-material/ShowChart";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: ["100%"] }}>
      <CssBaseline />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Daily" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Charts" icon={<ShowChart />} />
        <BottomNavigationAction label="Region" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
