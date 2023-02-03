import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixNavbar from "./components/NetflixNavbar.jsx";
import MainComponent from "./components/MainComponent.jsx";
import SecondComponent from "./components/SecondComponent.jsx";
import ThirdComponent from "./components/ThirdComponent.jsx";

function App() {
  return (
    <>
      <NetflixNavbar />
      <MainComponent />
      <h1>Harry Potter Render</h1>
      <SecondComponent />
      <ThirdComponent />
    </>
  );
}

export default App;
