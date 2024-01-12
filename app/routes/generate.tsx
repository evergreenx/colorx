import { useNavigate } from "@remix-run/react";

import { useEffect } from "react";
import { useLottie } from "lottie-react";
import LoaerJson from "../assets/loader.json";
import randomColor from "randomcolor";
export default function Generate() {
  const randomColorx = randomColor({
    hue: "random",
    luminosity: "random",
    count: 5,
  });

  const routeParam = randomColorx?.map((color) => color.slice(1)).join("-");


  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(`/${routeParam}`);
    }, 4000);
  }, []);

  const options = {
    animationData: LoaerJson,
    loop: true,
  };

  console.log();

  const { View } = useLottie(options);

  return (
    <div className="h-screen justify-center flex items-center">
      <div className="w-60 ">{View}</div>
    </div>
  );
}
