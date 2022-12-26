import React from "react";
import { useEffect, useRef, useState } from "react";
import Photos from "./photos";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export type Props = {};

const Wall = ({}: Props) => {
  return (
    <div className="container-fluid bg-body-secondary d-flex">
        
      <div className="d-flex container-fluid my-3 align-items-center justify-content-center  flex-column">
        <div className="">
          <h1>Photo Wall</h1>
          <p></p>
        </div>
        <Photos />
      </div>

      
    </div>
  );
}

export default Wall;
