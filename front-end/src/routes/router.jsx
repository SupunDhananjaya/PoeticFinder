import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import PoemsPage from "../pages/poems";
import AboutPage from "../pages/about";
import AddPoemPage from "../pages/addPoem";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/poems" element={<PoemsPage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/add" element={<AddPoemPage />} />
            </Routes>
        </BrowserRouter>
    );
};
