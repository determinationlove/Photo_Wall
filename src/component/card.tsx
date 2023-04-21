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

    const cardfront = require("../assets/logo192.png");
    const cardback = img;

    function image() {
        setIsFlip(!isFlip);
    }

    useEffect(() => {
        if (isFlip) {
            onFlip(code);
        }
    }, [isFlip]);

    useEffect(() => {
        if (isCovered) {
            setTimeout(() => {
                setIsFlip(false);
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
            className="card d-flex align-items-center justify-content-center col m-2 shadow-sm 
                       bg-image hover-zoom"
            style={{ maxWidth: "10rem", height: notDone ? "14rem" : "0" }}
            onMouseDown={image}
        >
            <img src={isFlip ? cardback : cardfront} className="w-100" style={{ height: notDone ? "fit-content" : "0" }} />
        </div>
    );
};

export default Card;
