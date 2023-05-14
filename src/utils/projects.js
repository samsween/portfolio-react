import fullstack from "../assets/images/fullstack-proj.png";
import techblock from "../assets/images/techblog-proj.png";
import crypto from "../assets/images/crypto-proj.png";
import { ICONS } from "./icons";
export const PROJECTS = [
  {
    title: "Crypto Mania",
    description:
      "A cryptocurrency tracker that allows users to search for cryptocurrencies and view their price, market cap, and other information. Users can buy and sell with fake money to test their trading skills.",
    image: crypto,
    url: "https://crypto-mania.herokuapp.com/",
    icons: [ICONS.react, ICONS.javascript, ICONS.nodejs, ICONS.mongodb],
    github: "https://github.com/samsween/Crypto-Mania",
  },
  {
    title: "Fullstack e-Store",
    description:
      "This was a project I did for my Fullstack Web Development course. It is a fullstack e-commerce website that allows users to browse products, add them to their cart, and checkout.",
    image: fullstack,
    url: "https://project-2-fullstack-estore.herokuapp.com/",
    github: "https://github.com/ptrcao/project-2-fullstack-estore",
    icons: [ICONS.html, ICONS.javascript, ICONS.nodejs, ICONS.mysql],
    id: 1,
  },
  {
    title: "Tech Blog",
    description:
      "This was a project I did for my Fullstack Web Development course. It is a fullstack blog website that allows users to create an account, login, and post blog posts.",
    image: techblock,
    url: "https://blog-site-mvc.herokuapp.com/",
    icons: [ICONS.html, ICONS.javascript, ICONS.nodejs, ICONS.mysql],
    github: " https://github.com/samsween/Tech-Blog-express-handlebars ",
  },
];
