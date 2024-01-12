import { Params, useParams } from "@remix-run/react";
import React from "react";
import { GeneratorNavigation } from "~/components/generator/options";

type ColorParams = {
  colorId: string;
};

export default function colorId() {
  // Get the userId param from the URL.
  let { colorId } = useParams<ColorParams>();

  const colors: undefined | any = colorId && colorId.split("-");

  return (
    <div className="py-10 h-fit ">
      <div className=" w-full flex justify-end">
        <GeneratorNavigation />
      </div>
      {colors.map((color: any, index: number) => (
        <div
          key={index}
          className="w-full h-36 flex px-[5px]"
          style={{
            backgroundColor: `#${color}`,
          }}
        >
          <div className="self-end mb-1">
            <h3 className=" text-2xl text-white ">{color}</h3>

            <p className=" text-sm text-white mt-[9px] ">{color}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
