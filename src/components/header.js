import React from "react";
import { Link } from "react-scroll";

import Logo from "../images/logos/logo-no-background.svg";
import Button from "./button";

const Header = () => {
  const navigation = [
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Nos réalisations", href: "#works" },
  ];
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-10 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  key={item.name}
                  to={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button label="NOUS CONTACTER" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
