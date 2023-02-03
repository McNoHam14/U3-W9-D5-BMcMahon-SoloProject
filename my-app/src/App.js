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
      <h1 style={{ color: "white" }}>Harry Potter Render</h1>
      <SecondComponent />
      <h1 style={{ color: "white" }}> Lord of the Rings Render</h1>
      <ThirdComponent />
      <CarouselMovies />
    </div>
  );
}

export default App;
