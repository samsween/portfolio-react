import { AnimateDiv } from "../components/AnimateDiv";
import { PROJECTS } from "../utils/projects";
import { Project } from "../components/Project";
export const Projects = () => {
  return (
    <AnimateDiv className="min-w-full min-h-full ">
      <h1 className="text-4xl font-bold py-20 text-center lg:text-left">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-20">
        {PROJECTS.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </AnimateDiv>
  );
};