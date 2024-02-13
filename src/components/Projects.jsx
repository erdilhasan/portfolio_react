import ProjectTile from "./ProjectTile";

export default function Projects() {
  return (
    <div
      id="projects"
      className="p-32 justify-center items-center text-balance "
    >
      <h1 className="text-4xl py-5">Projects</h1>
      <div className="space-y-10  divide-y">
        <ProjectTile
          project={{
            name: "Geyik",
            logoUrl:
              "https://firebasestorage.googleapis.com/v0/b/hasanerdil-portfolio.appspot.com/o/geyikLogo.png?alt=media&token=85a844c5-6827-426d-bec8-c27a7c0bdc71",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta dui metus, eget pulvinar odio auctor eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta dui metus, eget pulvinar odio auctor eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta dui metus, eget pulvinar odio auctor eget.",
            image:
              "https://firebasestorage.googleapis.com/v0/b/hasanerdil-portfolio.appspot.com/o/Screenshot_1697490020.png?alt=media&token=f66fa822-5a19-4aa1-ad0a-97c392f4354d",
          }}
        />
        <ProjectTile
          project={{
            name: "HUISA",
            logoUrl:
              "https://firebasestorage.googleapis.com/v0/b/hasanerdil-portfolio.appspot.com/o/playstore.png?alt=media&token=6a56adff-e1b7-45dc-a68d-7854a86dcdfa",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta dui metus, eget pulvinar odio auctor eget.",
            image:
              "https://firebasestorage.googleapis.com/v0/b/hasanerdil-portfolio.appspot.com/o/huisa.jpg?alt=media&token=7c27ea90-780b-4a1e-912e-d8c47c664bb7",
          }}
        />
        <ProjectTile
          project={{
            name: "Fides",
            logoUrl: "",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta dui metus, eget pulvinar odio auctor eget.",
            image: "",
          }}
        />
      </div>
    </div>
  );
}
