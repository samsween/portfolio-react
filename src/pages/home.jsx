import img from "../assets/images/web.png";
import TypeIt from "typeit-react";
import { AnimateDiv } from "../components/AnimateDiv";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <AnimateDiv className="w-full h-full py-40">
      <section className="w-full h-full flex  items-center justify-center lg:justify-between lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 text-4xl">
            <h1 className="text-6xl lg:text-8xl font-bold ">
              Hi, <br /> I'm Sam <br />
            </h1>
            <AnimatedText />
          </div>

          <Link to={"/contact"} className="w-1/2 text-xl text-center py-4 bg-[#73A5C6] rounded-md">
            Contact
          </Link>
        </div>
        <img src={img} className="w-80 hidden lg:flex" />
      </section>
    </AnimateDiv>
  );
};

const AnimatedText = () => {
  return (
    <TypeIt
      options={{
        speed: 50,
        deleteSpeed: 100,
      }}
      getBeforeInit={(instance) => {
        instance
          .type("Web devleoper")
          .pause(500)
          .delete(7)
          .type("eloper")
          .pause(500)
          .delete(7)
          .type("eveloper");
        return instance;
      }}
    />
  );
};