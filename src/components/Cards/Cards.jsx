import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import classNames from "classnames";
import fetchData from "../../api/index";
import CardMedia from "@mui/material/CardMedia";
import infect from "../../img/infect.png";
import death from "../../img/death.png";
import recover from "../../img/recover.png";

class Cards extends React.Component {
  state = {
    data: {
      active_cases: -1,
      active_cases_change: -1,
      avaccine: -1,
      cases: -1,
      cumulative_avaccine: -1,
      cumulative_cases: -1,
      cumulative_cvaccine: -1,
      cumulative_deaths: -1,
      cumulative_dvaccine: -1,
      cumulative_recovered: -1,
      cumulative_testing: -1,
      cvaccine: -1,
      date: "15-10-2021",
      deaths: -1,
      dvaccine: -0,
      province: "Canada",
      recovered: -1,
      testing: -1,
      testing_info: "NULL",
    },
  };

  async componentDidMount() {
    const data = await fetchData();
    console.log(this.state);
    this.setState({ data: data });
    console.log(this.state);
  }

  render() {
    const { data } = this.state;

    console.log(data);
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={classNames(styles.card, styles.infect)}
          >
            <CardMedia
              style={{
                height: 100,
                width: "auto",
              }}
              component="img"
              height="100"
              image={infect}
            />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infetion
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={data.active_cases} duration={1} />
              </Typography>
              <Typography variant="body2">Number of active cases</Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={classNames(styles.card, styles.death)}
          >
            <CardMedia
              style={{
                height: 100,
                width: "auto",
              }}
              component="img"
              height="100"
              image={death}
            />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Death
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={data.deaths} duration={1} />
              </Typography>
              <Typography variant="body2">Number of death</Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={classNames(styles.card, styles.recover)}
          >
            {" "}
            <CardMedia
              style={{
                height: 100,
                width: "auto",
              }}
              component="img"
              height="100"
              image={recover}
            />
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovery
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={this.state.data.recovered}
                  duration={1}
                />
              </Typography>
              <Typography variant="body2">Number of recoveries</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Cards;
