import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import classNames from "classnames";

const Cards = (props) => {
  //console.log(data);
  console.log(props);
  console.log(props.data.active_cases);
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
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infetion
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.data.active_cases} duration={1} />
            </Typography>
            <Typography variant="body2">Number of active</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={classNames(styles.card, styles.death)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.data.deaths} duration={1} />
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
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovery
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={props.data.recovered} duration={1} />
            </Typography>
            <Typography variant="body2">Number of recoveries</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
