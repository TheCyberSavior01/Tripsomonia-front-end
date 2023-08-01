import React from "react";
import './Main.css';
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <div className="main">
            <Header />
            <Outlet />
        </div>
    )
}