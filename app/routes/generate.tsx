import { useNavigate } from "@remix-run/react";

import { useEffect } from "react";
import { useLottie } from "lottie-react";
import LoaerJson from "../assets/loader.json";

export default function Generate() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      //   navigate("/ddddd");
    }, 4000);
  }, []);

  const options = {
    animationData: LoaerJson,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div className="h-screen justify-center flex items-center">
      <div className="w-60 ">{View}</div>
    </div>
  );
}
