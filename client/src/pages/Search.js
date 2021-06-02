import React, { useContext, useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import * as commonAPI from "shared/api/commonAPI";
import Input from "components/Input";
import Lesson from "components/Lesson";

function Search() {
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  const searchRef = useRef(null);

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

    const timer = setTimeout(() => {
      if (term.trim()) search();
    }, 1100);
    return () => clearTimeout(timer);
  }, [term]);

  const search = async () => {
    setIsLoading(true);
    const response = await commonAPI.search(term.trim());
    setIsLoading(false);
    setResult(response.result || []);
  };

  return (
    <div>
      <section className="flex items-center justify-center mt-6">
        <Input
          id="search-input"
          ref={searchRef}
          className="hidden lg:block"
          placeholder="Search..."
          icon={<AiOutlineSearch />}
          styles="bg-gray-800 "
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </section>
      <section className="mt-10">
        <ul>
          <Lesson lesson={{ title: "Hello", contentType: "Article" }} />
        </ul>
      </section>
    </div>
  );
}

export default Search;
