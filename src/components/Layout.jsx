import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen min-h-screen w-full bg-gradient-to-br from-[#1E3F66] to-[#2E5984]  text-gray-100 overflow-auto">
      <Header />
      <main className="max-w-6xl w-full  h-full m-auto flex-1 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
