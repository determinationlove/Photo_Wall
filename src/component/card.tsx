import React from "react";
import { useEffect, useRef, useState } from "react";
import "../style/custom.css";

export type Props = {
    img: string;
    code: string;
    onFlip: (cardId: string) => void;
};

const Card = ({ img, code, onFlip }: Props) => {
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

    return (
        <div
            className="card d-flex align-items-center justify-content-center col m-2 shadow-sm 
                       bg-image hover-zoom"
            style={{ maxWidth: "10rem", height: "14rem" }}
            onMouseDown={image}
        >
            <img src={isFlip ? cardback : cardfront} className="w-100" />
        </div>
    );
};

export default Card;
