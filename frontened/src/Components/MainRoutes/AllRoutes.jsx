import React from "react";
import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  return <div>
  <Routes>
    <Route path="/home" element={<h1>Home Page</h1>} />
  </Routes>
  </div>;
}

export default AllRoutes;
