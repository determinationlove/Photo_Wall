import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, useLocation, BrowserRouter, HashRouter  } from 'react-router-dom';

import Header from "./component/header";
import Wall from "./component/wall";
import MemoryGame from "./component/memoryGame";

function App() {
    return (
        <Wall/>
    );
}

export default App;
