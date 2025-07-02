import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <>
      <Navbar onToggleSearch={toggleSearch} />
      <Routes>
        <Route path="/" element={<Home showSearch={showSearch} />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
