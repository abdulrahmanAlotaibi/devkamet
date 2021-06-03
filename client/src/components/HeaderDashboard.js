import React, { useContext, useState, useEffect, useRef } from "react";
import Input from "./Input";
import { AiOutlineSearch } from "react-icons/ai";
import MinProfile from "./MinProfile";
import MobileSidebar from "./sidebar/MobileSidebar";
import { UserContext } from "shared/context/User";
import * as commonAPI from "shared/api/commonAPI";
import SearchModal from "./SearchModal";
import { useOnClickOutside } from "shared/util/common";

function HeaderDashboard() {
  const userContext = useContext(UserContext);
  const { user } = userContext.state;

  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const searchRef = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const initShortcut = () => {
    document.addEventListener("keydown", function (event) {
      if ((event.altKey && event.key == "s") || event.key == "S") {
        const searchInput = document.getElementById("search-input");
        searchInput.focus();
      }
    });
  };

  useEffect(() => {
    initShortcut();

    // This is what call 'debounce' technique
    const timer = setTimeout(() => {
      if (term.trim()) search();
    }, 1100);
    return () => clearTimeout(timer);
  }, [term]);

  const search = async () => {
    setIsLoading(true);

    setIsOpen(true);

    const response = await commonAPI.search(term.trim());

    setIsLoading(false);

    setResult(response.result || []);
  };

  return (
    <header className="flex justify-between items-center mb-2 p-2" ref={ref}>
      <MobileSidebar role={user.role} />
      <div className="relative hidden xl:flex">
        <Input
          id="search-input"
          ref={searchRef}
          className="hidden lg:block"
          placeholder="Alt+S to search..."
          icon={<AiOutlineSearch />}
          styles="bg-gray-800 "
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        {isOpen && <SearchModal isLoading={isLoading} result={result} />}
      </div>
      <MinProfile />
    </header>
  );
}

export default HeaderDashboard;
