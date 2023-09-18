import NavbarComponent from "./components/NavbarComponent";
import SliderComponent from "./components/SliderComponent";
import "../src/stylesheets/App.css";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent/>
        <SliderComponent/>   
      </div>
    </>
  );
}

export default App;
