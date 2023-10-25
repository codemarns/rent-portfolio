import { NavLink } from "react-router-dom";
import EasyRentLogo from "/easy-rent-high-resolution-logo-transparent.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 h-20 w-full px-8 backdrop-blur-md bg-white/75">
      <div className="h-full w-full max-w-[1440px] mx-auto flex items-center justify-between">
        <NavLink to={"/rent-portfolio/"}>
          <img alt="company logo" src={EasyRentLogo} className="h-14 w-auto" />
        </NavLink>
        <nav className="h-full w-auto">
          <ul className="h-full w-auto flex items-center gap-2">
            <li className="h-full w-auto">
              <NavLink
                to={"/rent-portfolio/"}
                className={
                  "h-full w-auto px-6 inline-flex items-center justify-center"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="h-full w-auto">
              <NavLink
                to={"/rent-portfolio/about"}
                className={
                  "h-full w-auto px-6 inline-flex items-center justify-center"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
