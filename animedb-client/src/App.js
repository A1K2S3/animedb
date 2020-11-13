import React, { Component } from "react";
import AnimeCard from "./components/AnimeCard";
import { Box, Grid } from "@material-ui/core";
import Axios from "axios";
import Navbar from "./components/Navbar";

Axios.defaults.baseURL =
  "http://ec2-13-232-29-105.ap-south-1.compute.amazonaws.com:8000/anime";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      animes: [],
    };
  }

  async componentDidMount() {
    Axios.get(`/latest`)
      .then((res) => this.setState({ animes: res.data }))
      .catch((err) => console.log(err));
  }

  handleSearchSubmit = (search) => {
    if (!search) return;
    const params = { search };
    Axios.get(`/search`, { params })
      .then((res) => this.setState({ animes: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Navbar handleSearchSubmit={this.handleSearchSubmit} />
        <Box mt={1} mx={1}>
          <Box mt={3}>
            <Grid spacing={3} container>
              {this.state.animes.map((anime) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={2}>
                    <AnimeCard
                      img={anime.bg_image}
                      name={anime.name}
                      driveLink={anime.driveLink}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </div>
    );
  }
}

export default App;
