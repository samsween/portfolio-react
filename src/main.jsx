import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { AnimatePresence } from "framer-motion";
import { App } from "./app";
import { Layout } from "./components/Layout";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence
      initial={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <Layout>
        <App />
      </Layout>
    </AnimatePresence>
  </React.StrictMode>
);
