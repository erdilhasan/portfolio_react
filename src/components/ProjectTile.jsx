import geyikhomepage from "../assets/geyik_homepage.png";

export default function ProjectTile() {
  let hasLogo = true;
  return (
    <div className="flex">
      <div>
        <div className="flex w-auto">
          <h1>Geyik</h1>
          {hasLogo ? (
            <img
              className="w-1/12"
              src="https://firebasestorage.googleapis.com/v0/b/hasanerdil-portfolio.appspot.com/o/geyikLogo.png?alt=media&token=85a844c5-6827-426d-bec8-c27a7c0bdc71"
              alt="geyikLogo"
            ></img>
          ) : null}
        </div>

        <p className="w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          porta dui metus, eget pulvinar odio auctor eget.
        </p>
      </div>
      <img
        className="rounded-xl object-scale-down w-1/6"
        src={geyikhomepage}
        alt="geyik_homepage"
      ></img>
    </div>
  );
}
