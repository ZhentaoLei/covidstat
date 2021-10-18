import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CssBaseline from "@mui/material/CssBaseline";
import ShowChart from "@mui/icons-material/ShowChart";

import { Link, withRouter } from "react-router-dom";

class Navigation extends React.Component {
  state = {
    value: -1,
    pathMap: ["../Cards", "../Charts", "../Compare"],
  };

  componentWillReceiveProps(newProps) {
    const { pathname } = newProps.location;
    const { pathMap } = this.state;

    const value = pathMap.indexOf(pathname);

    if (value > -1) {
      this.setState({
        value,
      });
    }
  }

  render() {
    const { pathMap } = this.state;

    return (
      <>
        <Box sx={{ width: ["100%"] }}>
          <CssBaseline />
          <BottomNavigation
            showLabels
            value={this.state.value}
            //onChange={this.handleChange}
            onChange={(event, newValue) => this.setState({ value: newValue })}
          >
            <BottomNavigationAction
              label="Daily"
              icon={<RestoreIcon />}
              component={Link}
              to={pathMap[0]}
            />
            <BottomNavigationAction
              label="Charts"
              icon={<ShowChart />}
              component={Link}
              to={pathMap[1]}
            />
            <BottomNavigationAction
              label="Regions"
              icon={<LocationOnIcon />}
              component={Link}
              to={pathMap[2]}
            />
          </BottomNavigation>
        </Box>
      </>
    );
  }
}

export default withRouter(Navigation);
