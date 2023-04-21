import React from "react";
import { useEffect, useRef, useState } from "react";
import "../style/custom.css";

export type Props = {
    img: string;
    code: string;
    onFlip: (cardId: string) => void;
    isCovered: any;
    notDone: any;
};

const Card = ({ img, code, onFlip, isCovered, notDone }: Props) => {
    const [isFlip, setIsFlip] = useState(false);
    const [isClickable, setIsClickable] = useState(true);

    const cardfront = require("../assets/logo192.png");
    const cardback = img;

    function image() {
        if (isClickable) {
            setIsFlip(!isFlip);
        }
    }

    useEffect(() => {
        if (isFlip == true) {
            setIsClickable(false);
            onFlip(code);
        }
    }, [isFlip]);

    useEffect(() => {
        if (isCovered) {
            setTimeout(() => {
                setIsFlip(false);
                setIsClickable(true);
            }, 1000);
        }
    }, [isCovered]);

    useEffect(() => {
        if (notDone == false) {
            console.log("被配對了");
        }
    }, [notDone]);

    return (
        <div
            className="card align-items-center justify-content-center col m-2 shadow-sm 
                       bg-image hover-zoom"
            style={{ maxWidth: "10rem", height: notDone ? "14rem" : "0", display: notDone ? "flex" : "block"}}
            onMouseDown={() => notDone ? image() : ""}
        >
            <img src={isFlip ? cardback : cardfront} className="w-100" style={{ height: notDone ? "fit-content" : "0" }} />
        </div>
    );
};

export default Card;
