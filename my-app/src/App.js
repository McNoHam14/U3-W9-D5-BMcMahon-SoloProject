import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./components/NetflixNavbar.jsx";
import MainComponent from "./components/MainComponent.jsx";
import SecondComponent from "./components/SecondComponent.jsx";
import ThirdComponent from "./components/ThirdComponent.jsx";
import CarouselMovies from "./components/CarouselMovies";

function App() {
  return (
    <div className="root">
      <NetflixNavbar />
      <MainComponent />

      <SecondComponent category={"Harry Potter"} />
      <SecondComponent category={"Toy Story"} />
      <SecondComponent category={"Lion King"} />

      <h1 style={{ color: "white" }}> Lord of the Rings</h1>
      <ThirdComponent />

      <CarouselMovies category={"Fast Furious"} />
    </div>
  );
}

export default App;
