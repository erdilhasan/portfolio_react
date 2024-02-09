import ProjectTile from "./ProjectTile";

export default function Projects() {
  return (
    <div
      id="projects"
      className="p-32 justify-center items-center text-balance "
    >
      <h1 className="text-4xl py-5">Projects</h1>
      <div>
        <ProjectTile />
      </div>
    </div>
  );
}
