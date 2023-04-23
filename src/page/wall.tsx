import React from "react";
import { useEffect, useRef, useState } from "react";

import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import Photos from "../component/photos";
import Header from "../component/header";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export type Props = {};

const Wall = ({}: Props) => {
    return (
        <div className="container-fluid bg-body-secondary d-flex" style={{minHeight: "100vh"}}>
            <div className="d-flex container-fluid my-3 align-items-center justify-content-start  flex-column">
                <div className=" py-4 d-flex flex-column ">
                    <h1>Photo Wall</h1>
                    <Header />
                </div>
                <Photos />
            </div>
        </div>
    );
};

export default Wall;
