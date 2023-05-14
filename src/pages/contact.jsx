import { AnimateDiv } from "../components/AnimateDiv";
import { BrandLinkedin, Mail, Phone } from "tabler-icons-react";
export const Contact = () => {
  return (
    <AnimateDiv className="flex py-20 w-full gap-8 h-full px-10 lg:px-0 flex-1 ">
      <div className="flex flex-col gap-8 text-2xl w-full ">
        <h1 className="text-4xl font-bold text-center ">Contact</h1>
        {/* <p className="text-lg">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p> */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <label className=" font-bold">Email</label>
            <Mail />
          </div>

          <a
            id="email"
            href="mailto:samsweeneyy@gmail.com"
            className="font-bold flex gap-3 items-cente hover:text-blue-500 transition-all duration-100 ease-in-out cursor-pointe"
          >
            samsweeneyy@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <label className=" font-bold">Phone</label>
            <Phone />
          </div>
          <a
            href="tel:0466586841"
            className="font-bold flex gap-2 items-center hover:text-blue-500 transition-all duration-100 ease-in-out cursor-pointe"
          >
            0466586841
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 items-center">
            <label className=" font-bold">LinkedIn</label>
            <BrandLinkedin />
          </div>
          <a
            href="https://au.linkedin.com/in/sam-sweeney-5300a9249"
            target="_blank"
            className="font-bold flex gap-2 items-center hover:text-blue-500 transition-all duration-100 ease-in-out cursor-pointe"
          >
            Sam Sweeney
          </a>
        </div>
      </div>
    </AnimateDiv>
  );
};
