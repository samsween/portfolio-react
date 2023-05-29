import Avatar from "../assets/images/programmer.png";
import { AnimateDiv } from "../components/AnimateDiv";
import { motion } from "framer-motion";
import { SkillIcon } from "../components/SkillIcon";
import { ICONS } from "../utils/icons";
const SKILLS = [
  {
    name: "React",
    icon: ICONS.react,
  },
  {
    name: "Node",
    icon: ICONS.nodejs,
  },
  {
    name: "Express",
    icon: ICONS.express,
  },
  {
    name: "Tailwind",
    icon: ICONS.tailwind,
  },
  {
    name: "MySQL",
    icon: ICONS.mysql,
  },
  {
    name: "Prisma",
    icon: ICONS.prisma,
  },
  {
    name: "MongoDB",
    icon: ICONS.mongodb,
  },
  {
    name: "NextJS",
    icon: ICONS.nextjs,
  },
];

export const About = () => {
  return (
    <AnimateDiv className="w-full h-full flex justify-center items-center text-lg">
      <div className="flex flex-col gap-10 lg:gap-0">
        <section className="text-xl flex px-5 lg:px-0 flex-col lg:flex-row items-center pt-20 lg:pt-0">
          <div className="flex flex-col gap-8 tracking-wide text-lg">
            <h1 className="text-xl lg:text-4xl font-bold">About Me</h1>
            <p>
              Hello I'm Sam, I am a passionate web developer. I have always been
              interested in technology and how it can be used to create amazing
              online experiences.
            </p>
            <p>
              When I am not working on websites, I enjoy sailing and playing video
              games. I believe that a healthy work-life balance is
              important for staying motivated and focused, which is why I make
              sure to take breaks and enjoy my free time.
            </p>
          </div>
          <img src={Avatar} className="w-80 ml-20 hidden lg:flex" />
        </section>
        <section className="flex-1 flex flex-col gap-8 px-5 lg:px-0">
          <h1 className="text-4xl font-bold">Skills</h1>
          <div className="grid grid-cols-3 lg:flex gap-8">
            {SKILLS.map((skill, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, bounce: 0.5 }}
              >
                <SkillIcon icon={skill} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </AnimateDiv>
  );
};
