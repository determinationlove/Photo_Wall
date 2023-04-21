import React from "react";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
    HashRouter,
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./component/header";
import Wall from "./page/wall";
import MemoryGame from "./page/memoryGame";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Wall />} />
            <Route path="/game" element={<MemoryGame />} />
        </Routes>
    </HashRouter>
);
