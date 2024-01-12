import { Params, useParams } from "@remix-run/react";
import React from "react";
import { GeneratorNavigation } from "~/components/generator/options";
import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";

extend([namesPlugin]);

type ColorParams = {
  colorId: string;
};

export default function colorId() {
  // Get the userId param from the URL.
  let { colorId } = useParams<ColorParams>();

  console.log(colord("#664868").toName({ closest: true }));

  const colors: undefined | any = colorId && colorId.split("-");

  const handleColorName = (colorHex: string) => {
    console.log(colorHex, "colorHex");

    let addHex: string = `#${colorHex}`;



  
    return colord(addHex).toName({ closest: true });
  };

  console.log(handleColorName("ff6347"), "test");
  return (
    <div className="  h-[100vh] ">
      <div className=" w-full flex justify-end">
        <GeneratorNavigation />
      </div>
      {colors.map((color: string, index: number) => (
        <div
          key={index}
          className="w-full h-36 flex px-[5px]"
          style={{
            backgroundColor: `#${color}`,
          }}
        >
          <div className="self-end mb-1">
            <h3 className=" text-2xl text-white ">{color}</h3>

            <p className=" text-sm text-white mt-[9px] ">
              {handleColorName(color)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
