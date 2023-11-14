import "./App.css";
import Counter from "./components/counter";
import { Todolist } from "./components/todolist";
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
