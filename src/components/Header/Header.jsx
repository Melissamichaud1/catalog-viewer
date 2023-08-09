import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import BookList from "../Books/BookList";
import "./Header.css";
import treeline from "../../assets/treeline3.mp4";

const Header = () => {
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearchPerformed = () => {
    setSearchPerformed(true);
  };

  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content">
          <video src={treeline} type="video/mp4" autoPlay loop muted />
          <h2 className="header-title">Search For Books</h2>
          <p className="header-text">
            Unlock Imagination's Library: Find Your Next Adventure in the Pages
            of Possibility!
          </p>
          <Search onSearchPerformed={handleSearchPerformed} />
        </div>
      </header>
      {searchPerformed && <BookList />}
    </div>
  );
};

export default Header;
