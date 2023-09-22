import NavbarComponent from "./components/User/NavbarComponent";
import SliderComponent from "./components/User/SliderComponent";
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
