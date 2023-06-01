import "./App.css";
import TopBar from "./pages/Main";
import Rockets from "./pages/content";

function App() {
  return (
    <div className="App overflow-y-hidden">
      <TopBar />
      <Rockets />
    </div>
  );
}

export default App;
