import Article from "./components/Article";
import User from "./components/User";
function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>React Skeleton</h1>
      </div>
      <div className="content">
        <Article />
        <User />
      </div>
    </div>
  );
}

export default App;
