import { Component } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class CarouselMovies extends Component {
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
      <Container>
        <Row className="mt-3 justify-content-center">
          <Col xs={12} md={6} className="text-center">
            <h2 style={{ color: "white" }}>Carousel of Movies</h2>
            <Carousel>
              {this.state.movies.map((objectOfMovies) => {
                return (
                  <Col xs={2} key={objectOfMovies.imdbID}>
                    <SingleMovie objectOfMovies={objectOfMovies} />
                  </Col>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CarouselMovies;
