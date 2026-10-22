import landingBackground from "../assets/landing-page-design.svg";

export function LandingPageDesign() {
  return (
    <img
      src={landingBackground}
      alt=""
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        right-0 top-0
        h-full w-auto
        max-w-none
        object-contain
      "
    />
  );
}