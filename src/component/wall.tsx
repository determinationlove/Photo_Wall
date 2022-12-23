import React from "react";
import { useEffect, useRef, useState } from "react";
import Photos from "./photos";

export type Props = {};

const Wall = ({}: Props) => {
  return (
    <div className="w-full h-full bg-zinc-200">
        
      <div className="w-full h-30">
        <h1 className="text-slate-600 ">Photo Wall</h1>
      </div>

      <Photos></Photos>
    </div>
  );
};

export default Wall;
