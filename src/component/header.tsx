import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";

export type Props = {};

const Header = ({}: Props) => {
    return (
        <div className="my-4 d-flex flex-row w-full justify-content-center align-content-center">
            <a className="nav-link active mx-3" aria-current="page" href="#">
                照片牆
            </a>
            <a className="nav-link mx-3" aria-current="page" href="#/game">
                玩遊戲
            </a>
        </div>
        
    );
};

export default Header;
