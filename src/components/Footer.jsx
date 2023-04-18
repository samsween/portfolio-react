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
          <BrandGithub />
          <BrandLinkedin />
          <Mail />
        </div>
        <p className="items-center gap-1 text-lg hidden lg:flex">
          Sam Sweeney
          <Copyright width={18} />
        </p>
      </div>
    </footer>
  );
};
