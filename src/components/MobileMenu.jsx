import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Copyright, DeviceMobileMessage, File, Hammer, Home, InfoCircle } from "tabler-icons-react";
import { Link } from "react-router-dom";
export const MobileMenu = ({ setOpen, open }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const handleOutsideClick = (e) => {
      if (!container?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleOutsideClick, {
        capture: true,
      });
    };
  }, []);
  return (
    <AnimatePresence>
       {open &&  <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={"fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 z-50" }
        >
          <aside
            className="w-80 fixed top-0 right-0 h-screen flex justify-between flex-col bg-[#1E3F66] z-50"
            ref={containerRef}
          >
            <h1 className="text-xl text-white p-8">Sam Sweeney</h1>
            <ul className="text-xl text-white flex flex-col gap-2">
              <li className="py-4 rounded-2xl  flex justify-center items-center gap-2  text-center border-white">
                <Home />
                <Link to="/">Home</Link>
              </li>
              <li className="py-4 rounded-2xl  flex justify-center items-center gap-2  text-center border-white">
                <InfoCircle />
                <Link to="/about">About Me</Link>
                
              </li>
              <li className="py-4 rounded-2xl  flex justify-center items-center gap-2  text-center border-white">
                <Hammer />
                <Link to="/projects">Projects</Link>
              </li>
              <li className="py-4 rounded-2xl  flex justify-center items-center gap-2  text-center border-white">
                <DeviceMobileMessage />
                <Link to="/contact">Contact</Link>
              </li>
              <li className="py-4 rounded-2xl  flex justify-center items-center gap-2  text-center border-white">
                <File />
                <a download href="resume.pdf">
                  Resume
                </a>
              </li>
            </ul>
            <p className="items-center p-8 gap-1 flex ">
              Sam Sweeney
              <Copyright width={18} />
            </p>
          </aside>
        </motion.div>}
        </AnimatePresence>
      
  );
};
