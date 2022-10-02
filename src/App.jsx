import { Route, Routes } from "react-router-dom";
import { GamePage, Home, OrderPage } from "./pages";
import { Header } from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="app/:title" element={<GamePage />} />
          <Route path="order" element={<OrderPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
