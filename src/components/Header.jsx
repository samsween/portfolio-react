import { useState } from "react";
import { Menu2 } from "tabler-icons-react";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0  z-10 shadow-md bg-[#1E3F66] bg-opacity-90">
      <nav className="max-w-6xl w-full py-8 flex justify-between m-auto px-5 lg:px-0">
        <h1 className="text-xl">Sam Sweeney</h1>
        <ul className="hidden ml-auto text-lg lg:flex ">
          <li className="mr-4">
            <a href="#home">Home</a>
          </li>
          <li className="mr-4">
            <a href="#about">About Me</a>
          </li>
          <li className="mr-4">
            <a href="#projects">Projects</a>
          </li>
          <li className="mr-4">
            <a href="#contact">Contact</a>
          </li>
          <li className="mr-4">
            <a download href="resume.pdf">
              Resume
            </a>
          </li>
        </ul>
        <Menu2
          className="lg:hidden"
          width={40}
          onClick={() => {
            setOpen(true);
          }}
        />
        <MobileMenu setOpen={setOpen} open={open} />
      </nav>
    </header>
  );
};
