import { create } from "zustand";
import React from "react";
import { useEffect, useRef, useState } from "react";
import useMemoryGameStore from "./useMemoryGameStore";

type CardState = {
    isFlip: boolean;
    isClickable: boolean;
    Done: boolean;
    DoneAdd: () => void;
    image: () => void;
    resetCards: () => void;
};

const createCardStore = () =>
    create<CardState>((set) => ({
        id: "",
        isFlip: false,
        isClickable: true,
        Done: false,
        DoneAdd: () => {
            set((state) => {
                if (state.isClickable == false) {
                    return {
                        Done: true,
                    };
                }
                return state;
            });
            
        },
        image: () =>
            set((state) => {
                //console.log(state.isClickable);
                if (state.isClickable == true) {
                    //console.log("翻牌");

                    return {
                        isFlip: !state.isFlip,
                        isClickable: false,
                    };
                }
                return state;
            }),
        resetCards: () =>
            set(() => ({
                isFlip: false,
                isClickable: true,
            })),
    }));

export default createCardStore;
