import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import { useLottie } from "lottie-react";
import LoaerJson from "../assets/loader.json";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const variants1 = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

export default function Index() {

  return (
    <motion.section
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className=" mx-auto"
    >
      <div className="hero mx-auto flex flex-col justify-center items-center h-screen p-5">
        <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="lg:text-[72px] ergonic  text-3xl font-bold lg:w-[712px] w-full  text-center  leading-tight "
        >
          Instant Color Magic with ColorX
        </motion.h1>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-[#64748B] text-sm outfit lg:text-base w-full lg:w-[432px] text-center my-[36px]"
        >
          Our turbocharged color palette generator lets you blaze through
          creative boundaries,turning your visions into vibrant reality with
          unprecedented speed. Ignite your design journey
        </motion.p>

        <motion.button
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={variants1}
          className=" px-[8px] outfit py-[16px] w-[116px] bg-black rounded-[33px] text-white text-sm text-center "
        >
          <Link to={"/generate"}>Generate</Link>
        </motion.button>

       
      </div>
    </motion.section>
  );
}
