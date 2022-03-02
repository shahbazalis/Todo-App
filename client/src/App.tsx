import "./App.css";
import Todos from "./views/todos/todos";
import Appbar from "./layout/appBar";
function App() {
  return (
    <div className="App">
      <Appbar />
      <Todos />
    </div>
  );
}

export default App;
