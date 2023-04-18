import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {Home} from "./home";
import { About } from "./about";
import { Projects } from "./projects";
import { Contact } from "./contact";
import { Layout } from "../components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  ), {
    basename: "/portfolio-react",
  }
);

export default router;
