import React from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";
import styles from "./Charts.module.css";

class Charts extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchDailyData();
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;

    // var date = data.map(({ date }) => date);
    // var confirm = data.map(({ confirm }) => confirm);
    const lineChart = data[0] ? (
      <Line
        data={{
          labels: data.map(({ date }) => date),
          datasets: [
            {
              data: data.map(({ cases }) => cases),
              label: "active cases",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

    return <div className={styles.container}>{lineChart}</div>;
  }
}

export default Charts;
