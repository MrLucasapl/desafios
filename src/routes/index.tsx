import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../component/layout";
import AnagramChecker from "../pages/anagrama";
import Fibonacci from "../pages/fibonacci";
import Home from "../pages/fizzbuzz";
import MinorPositive from "../pages/menorIntPositivo";

const Dors = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/anagrama" element={<AnagramChecker />} />
          <Route path="/fibonacci" element={<Fibonacci />} />
          <Route path="/menorPositivo" element={<MinorPositive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Dors;
