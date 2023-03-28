import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../component/layout";
import AnagramChecker from "../pages/anagrama";
import Fibonacci from "../pages/fibonacci";
import Home from "../pages/fizzbuzz";
import Gray from "../pages/grey";
import MinorPositive from "../pages/menorIntPositivo";
import MajorPrefix from "../pages/maiorPrefixo";
import CountSteps from "../pages/countSteps";
import CheckPalindrome from "../pages/listaLigada";

const Dors = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/anagrama" element={<AnagramChecker />} />
          <Route path="/fibonacci" element={<Fibonacci />} />
          <Route path="/menorPositivo" element={<MinorPositive />} />
          <Route path="/gray" element={<Gray />} />
          <Route path="/maiorPrefixo" element={<MajorPrefix />} />
          <Route path="/contaPassos" element={<CountSteps />} />
          <Route path="/verificaPalindromo" element={<CheckPalindrome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Dors;
