import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "../../components/Main";
import Website from "../../components/Website";

const Options = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/options.html">Main</Link>
            </li>
            <li>
              <Link to="/website">Website</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/options.html" element={<Main />} />
          <Route path="/website" element={<Website />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Options;
