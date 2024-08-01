import "./App.css";
import { InfiniteScrollComponent } from "./infiniteScroll/InfiniteScrollComponent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<InfiniteScrollComponent />} />
    </Routes>
  );
}

export default App;
