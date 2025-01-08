import GeneralInformation from "./components/GeneralInformation.jsx";
import "./styles/App.css";

function App() {
  return (
    <div className="container" id="layout">
      <div id="header">
        <h1>CV APP</h1>
      </div>
      <div id="inputSection">
        <GeneralInformation></GeneralInformation>
      </div>
      <div id="cvSection">CV</div>
    </div>
  );
}

export default App;
