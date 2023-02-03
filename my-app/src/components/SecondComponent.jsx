import { Component } from "react";
import { Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

// 447ab8e0
// http://www.omdbapi.com/?i=tt3896198&apikey=447ab8e0
// harry%20potter

class SecondComponent extends Component {
  state = {
    url: "http://www.omdbapi.com/?apikey=447ab8e0&s=",
    movies: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(this.state.url + "harry%20potter");
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        const dataMovie = data.Search;

        this.setState({
          ...this.state,
          movies: dataMovie,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Row>
        {this.state.movies.map((objectOfMovies) => {
          return (
            <Col xs={8} key={objectOfMovies.imdbID}>
              <SingleMovie objectOfMovies={objectOfMovies} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default SecondComponent;
