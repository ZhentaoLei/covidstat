import React from "react";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import Region from "./components/Region/Region";
import Navigation from "./components/Navigation/Navigation";
import styles from "./App.module.css";
import fetchData from "./api/index";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <div className={styles.container}>
          <Cards data={data} />
          <Charts />
          <Region />
        </div>
        <Navigation />
      </>
    );
  }
}

export default App;
