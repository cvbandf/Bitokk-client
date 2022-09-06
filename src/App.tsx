import React, { FC } from 'react';
import { Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AboutPage} from "./pages/AboutPage";
import {GiveawayPage} from "./pages/GiveawayPage";
import {PartnersPage} from "./pages/PartnersPage";
import {SignUpPage} from "./pages/SignUpPage";
import {SignInPage} from "./pages/SignInPage";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

export const App:FC = () => {

return (
    <Routes >
        <Route path="" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/giveaway" element={<GiveawayPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
    </Routes>
)
}