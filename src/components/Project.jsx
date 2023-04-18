import { BrandGithub, ExternalLink } from "tabler-icons-react";

export const Project = ({ project }) => {
  return (
    <section className="w-full flex flex-col gap-2 border-b py-8">
      <h1 className="text-2xl text-center lg:text-left font-bold">
        {project?.title}
      </h1>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-normal lg:items-stretch gap-10">
        <div className="w-1/2 text-xl flex flex-col gap-8 lg:gap-0 justify-between">
          <p>{project?.description}</p>
          <div className="flex justify-between w-full items-center">
            <ul className="flex gap-4">
              {project?.icons.map((icon) => (
                <li>
                  <img src={icon} className="w-10" />
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a href={project?.github} target="_blank">
                <BrandGithub />
              </a>
              <a href={project?.url} target="_blank">
                <ExternalLink />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={project?.image}
            alt="project"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
