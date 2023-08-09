import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../../Data";
import "./Search.css";

const Search = ({ onSearchPerformed }) => {
  const { setSearchTerm } = useGlobalContext();
  const searchText = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = searchText.current.value.trim();
    setSearchTerm(tempSearchTerm);
    onSearchPerformed();

    searchText.current.value = "";
  };

  return (
    <div className="search">
      <div className="container">
        <div className="search-content">
          <form className="search" onSubmit={handleSubmit}>
            <div className="search-element flex flex-sb bg-white">
              <input
                type="text"
                className="form-control"
                placeholder="Search for author or title.."
                ref={searchText}
              />
              <button type="submit" className="flex flex-c">
                <FaSearch className="text-black" size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
