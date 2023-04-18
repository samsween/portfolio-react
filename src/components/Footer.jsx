import {
  BrandGit,
  BrandGithub,
  BrandLinkedin,
  Copyright,
  Mail,
} from "tabler-icons-react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full py-8">
      <div className="max-w-6xl w-full flex justify-between m-auto px-5 lg:px-0">
        <div className="flex gap-8">
          <a href="https://github.com/samsween" target="_blank">
          <BrandGithub />
          </a>
          <a href="https://au.linkedin.com/in/sam-sweeney-5300a9249" target="_blank">
          <BrandLinkedin />
          </a>
          <a href="mailto:samsweeneyy@gmail.com" target="_blank">
          <Mail />
          </a>  
        </div>
        <p className="items-center gap-1 text-lg hidden lg:flex">
          Sam Sweeney
          <Copyright width={18} />
        </p>
      </div>
    </footer>
  );
};
