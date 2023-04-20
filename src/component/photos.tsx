import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export type Props = {};

const Photos = ({}: Props) => {
    const [Data, setData] = useState<any>();
    const [IsLoading, setIsLoading] = useState<any>(true);
    const apiKey = process.env.REACT_APP_API_KEY;

    let num: number = 20;

    useEffect(() => {
        axios
            .get("https://api.thecatapi.com/v1/images/search?limit=20", {
                headers: { "x-api-key": `${apiKey}` },
            })
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            });
    }, []);

    if (IsLoading) {
        return (
            <div className="d-flex  container justify-content-center text-amber-800">
                <p>Loading ...</p>
            </div>
        );
    } else {
        console.log(Data);
        return (
            <div className="container py-2 d-flex flex-nowrap w-75">
                <div className="position-relative align-items-center justify-content-center m-2 w-1/4 col-md-3">
                    {Data?.slice(0, 5).map((item: any) => {
                        return (
                            <div className="py-2 items-center justify-center">
                                <img
                                    src={item.url}
                                    className="img-fluid"
                                    alt="cat image"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="position-relative align-items-center justify-content-center m-2 w-1/4 col-md-3">
                    {Data?.slice(5, 10).map((item: any) => {
                        return (
                            <div className="py-2 items-center justify-center">
                                <img
                                    src={item.url}
                                    className="img-fluid"
                                    alt="cat image"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="position-relative align-items-center justify-content-center m-2 w-1/4 col-md-3">
                    {Data?.slice(10, 15).map((item: any) => {
                        return (
                            <div className="py-2 items-center justify-center">
                                <img
                                    src={item.url}
                                    className="img-fluid"
                                    alt="cat image"
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="position-relative align-items-center justify-content-center m-2 w-1/4 col-md-3">
                    {Data?.slice(15, 20).map((item: any) => {
                        return (
                            <div className="py-2 items-center justify-center">
                                <img
                                    src={item.url}
                                    className="img-fluid"
                                    alt="cat image"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Photos;
