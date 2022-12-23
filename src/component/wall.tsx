import React from "react";
import { useEffect, useRef, useState } from "react";
import 'tailwindcss/tailwind.css';
import Photos from "./photos";

export type Props = {};

const Wall = ({}: Props) => {
  return (
    <div className="flex w-full bg-zinc-200 flex-col absolute">
        
      <div className="flex w-full h-30 justify-center items-start my-6">
        <div className="flex w-fit h-fit  text-slate-600 text-4xl">
          <h1>Photo Wall</h1>
          <p></p>
        </div>
        
      </div>

      <Photos />
    </div>
  );
}

export default Wall;
