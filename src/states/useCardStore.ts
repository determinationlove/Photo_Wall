import { create } from "zustand";
import React from "react";
import { useEffect, useRef, useState } from "react";

type CardState = {
    isFlip: boolean;
    isClickable: boolean;
    Done: boolean;
    image: () => void;
};

const createCardStore = () =>
    create<CardState>((set) => ({
        id: "",
        isFlip: false,
        isClickable: true,
        Done: false,

        image: () =>
            set((state) => {
                console.log(state.isClickable);
                if (state.isClickable == true) {
                    console.log("翻牌");
                    return {
                        isFlip: !state.isFlip,
                        isClickable: false,
                    };
                }
                return state;
            }),
    }));

export default createCardStore;
