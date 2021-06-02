import React from "react";
import MinNav from "./MinNav";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <section
        className="w-full  h-24 p-4  bg-gray-900 z-50 font-medium
            text-white flex items-center justify-center shadow-lg"
      >
        <Nav />
        <MinNav />
      </section>
    </header>
  );
}

export default Header;
