import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { LevelIndex } from "./components/levels/LevelIndex";
import { DeveloperIndex } from "./components/developers/DeveloperIndex";
import { LevelContextLayout } from "./layouts/LevelContextLayout";
import { DeveloperContextLayout } from "./layouts/DeveloperContextLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto min-h-screen pt-4">
        <ToastContainer autoClose={1000} />
        <Navbar />
        <Routes>
          <Route element={<LevelContextLayout />}>
            <Route path="/" element={<LevelIndex />} />
            <Route path="/levels" element={<LevelIndex />} />
          </Route>
          <Route element={<DeveloperContextLayout />}>
            <Route path="/developers" element={<DeveloperIndex />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
