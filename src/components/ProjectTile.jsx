/* eslint-disable react/prop-types */
export default function ProjectTile(props) {
  const project = props.project;
  return (
    <div className="flex justify-between space-y-10">
      <div className=" items-center align-middle">
        <div className="flex  justify-content  align-middle items-center text-center ">
          <h1 className="text-3xl font-bold">{project.name}</h1>

          {project.logoUrl != "" ? (
            <img
              className="w-1/12 mx-2"
              src={project.logoUrl}
              alt={project.logoUrl}
            ></img>
          ) : null}
        </div>

        <p className="w-1/2 align-middle justify-center my-auto items-center ">
          {project.description}
        </p>
      </div>

      {project.image != "" ? (
        <img
          className="rounded-xl object-scale-down w-1/6 "
          src={project.image}
          alt={project.image}
        ></img>
      ) : null}
    </div>
  );
}
