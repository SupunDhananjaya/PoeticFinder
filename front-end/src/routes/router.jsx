import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import PoemsPage from "../pages/poems";
import MetaphorsPage from "../pages/metaphors";
import AboutPage from "../pages/about";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/poems" element={<PoemsPage />} />
                <Route exact path="/metaphors" element={<MetaphorsPage />} />
                <Route exact path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
};
