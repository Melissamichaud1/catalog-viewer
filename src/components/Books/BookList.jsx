import React from "react";
import { useGlobalContext } from "../../Data";
import Book from "../Books/Book";
import "./BookList.css";

const BookList = () => {
  const { books } = useGlobalContext();

  return (
    <div className="booklist-content">
      {books.map((book) => (
        <Book key={book.sku} book={book} />
      ))}
    </div>
  );
};

export default BookList;
