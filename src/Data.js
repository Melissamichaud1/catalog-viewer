import React, { useState, useContext, useEffect, useCallback } from "react";
import jsonData from "./data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("Search for title or author..");
  const [books, setBooks] = useState([]);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(() => {
    const newBooks = jsonData.products.filter((book) => {
      console.log("Book:", book);
      console.log("Book Name:", book.name);
      console.log("Book Author:", book.author);

      return (
        (book.name &&
          book.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (book.author &&
          book.author.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    setBooks(newBooks);

    if (newBooks.length > 0) {
      setResultTitle("Your Search Result");
    } else {
      setResultTitle("No Search Result Found!");
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        books,
        searchTerm,
        setSearchTerm,
        resultTitle,
        catalogID: jsonData.catalogID,
        catalogName: jsonData.name,
        catalogImageUri: jsonData.imageUri,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
