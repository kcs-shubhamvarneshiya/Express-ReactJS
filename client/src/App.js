import "./App.css";
import PostComponents from './components/PostComponent.jsx'
import NavbarComponent from "./components/NavbarComponent";
import LoginComponent from "./components/LoginComponent.jsx";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent />

        {/* <PostComponents/> */}
      </div>
      <LoginComponent />
    </>
  );
}

export default App;
