import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu2 } from "tabler-icons-react";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full shadow-md">
      <nav className="max-w-6xl w-full py-8 flex justify-between m-auto px-5 lg:px-0">
        <h1 className="text-xl">Sam Sweeney</h1>
        <ul className="hidden ml-auto text-lg lg:flex ">
          <li className="mr-4">
            <Link
              to="/"
              className={
                location.pathname === "/" ? "border-b border-white" : ""
              }
            >
              Home
            </Link>
          </li>
          <li className="mr-4">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "border-b border-white" : ""
              }
            >
              About Me
            </Link>
          </li>
          <li className="mr-4">
            <Link
              to="/projects"
              className={
                location.pathname === "/projects" ? "border-b border-white" : ""
              }
            >
              Projects
            </Link>
          </li>
          <li className="mr-4">
            <Link
              to="/contact"
              className={
                location.pathname === "/contact" ? "border-b border-white" : ""
              }
            >
              Contact
            </Link>
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
