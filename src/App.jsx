import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Header } from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
