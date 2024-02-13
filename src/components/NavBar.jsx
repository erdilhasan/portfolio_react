import NavBarButton from "./NavBarButton";

export default function NavBar() {
  return (
    <div className="align-middle  items-center  ">
      <nav className="flex  p-5  align-middle justify-center  ">
        <NavBarButton title="Introduction" sectionId="#introduction" />
        <NavBarButton title="About Me" sectionId="#aboutme" />
        <NavBarButton title="Projects" sectionId="#projects" />
        <NavBarButton title="Contact" sectionId="#contact" />
      </nav>
    </div>
  );
}
