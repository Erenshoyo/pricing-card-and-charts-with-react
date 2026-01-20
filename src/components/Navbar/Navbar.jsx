import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((route) => (
    <li
      key={route.id}
      className="md:mr-10 p-2 hover:bg-blue-400 rounded-lg cursor-pointer"
    >
      <a href={route.path}>{route.name}</a>
    </li>
  ));
  return (
    <nav className="flex justify-between mx-10 my-4 items-center ">
      <div className="flex gap-4 mr-4 items-center">
        <button
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50 relative"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <ul
          className={`
        md:hidden absolute top-16 bg-blue-500 p-4 rounded-xl z-40
        transform transition-all duration-300 ease-in-out 
        ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-4 pointer-events-none invisible"
        }
      `}
        >
          {links}
        </ul>

        <h3 className="text-2xl font-semibold">My<span className="text-blue-500">Navbar</span></h3>
      </div>
      <ul className="md:flex hidden">{links}</ul>
      <button className="btn bg-blue-500">Sign In</button>
    </nav>
  );
};

export default Navbar;
