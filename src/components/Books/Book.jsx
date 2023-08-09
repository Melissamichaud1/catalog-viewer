import React from "react";
import { Link } from "react-router-dom";
import NoBookCover from "../../assets/NoBookCover.png";
import "./BookList.css";

const Book = ({ book }) => {
  const { name, images, author, edition, pubDate } = book;

  const firstImage = images && images.length > 0 ? images[0].uri : null;

  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        {firstImage ? (
          <img src={firstImage} alt={name} />
        ) : (
          <img src={NoBookCover} alt="No cover found" />
        )}
      </div>
      <div className="book-item-info text-center">
        <Link to={`/book/${book.sku}`}>
          <div className="book-item-info-item title fw-7 fs-18">
            <span>{name}</span>
          </div>
        </Link>
        <div className="book-item-info-item author fs-15">
          <span className="text-capitalize fw-7">Author: </span>
          <span>{author}</span>
        </div>

        <div className="book-item-info-item edition-count fs-15">
          <span className="text-capitalize fw-7">Edition: </span>
          <span>{edition}</span>
        </div>

        <div className="book-item-info-item publish-year fs-15">
          <span className="text-capitalize fw-7">Publish Year: </span>
          <span>{new Date(pubDate).getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
