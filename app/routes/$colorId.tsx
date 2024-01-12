import { Params, useParams } from "@remix-run/react";
import React from "react";

type ColorParams = {
  colorId: string;
};

export default function colorId() {
  // Get the userId param from the URL.
  let { colorId } = useParams<ColorParams>();

  const colors: undefined | any = colorId && colorId.split("-");

  return (
    <div className="py-10 h-fit">
      {colors.map((color: any, index: number) => (
        <div
          key={index}
          className="w-full h-64"
          style={{
            backgroundColor: `#${color}`,
          }}
        ></div>
      ))}
    </div>
  );
}
