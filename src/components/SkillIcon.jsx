export const SkillIcon = ({ icon }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <img src={icon.icon} className="w-10 sm:w-14" />
      <h2 className="text-lg">{icon.name}</h2>
    </div>
  );
};
