import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import edelweiss2 from "../../assets/edelweiss2.png";

const BookCard = ({ image, title, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-card-img" />
      <h3 className="book-card-title">{title}</h3>
      <p className="book-card-author">{author}</p>
    </div>
  );
};

const About = () => {
  const popularBooks = [
    {
      image:
        "https://edel-images-plus.azureedge.net/assets/OO/images/imprint_logos/original/ATL_logo_rgb2.png?format=png",
      title: "Space Cats",
      author: "asdf",
    },
    {
      image:
        "https://edel-images-plus.azureedge.net/assets/OO/images/imprint_logos/original/cheezburger.png?format=png",
      title: "Supercharged Panda Go-Carts",
      author: "Tannenbaum, Clara",
    },
    {
      image:
        "https://edel-images.azureedge.net/ea/OO/images/jacket_covers/original/1000000007_5bbee.jpg",
      title: "stuff - take 2: New Subtitle",
      author: "Uncle, Bob",
    },
    {
      image:
        "https://edel-images.azureedge.net/ea/OO/images/jacket_covers/original/2000000003_e5f6c.jpg",
      title: "Who ate the Walrus?",
      author: "Doe, Jane",
    },
    {
      image:
        "https://edel-images.azureedge.net/ea/OO/images/jacket_covers/original/2000000004_518da.jpeg",
      title: "Jen's US Trade Title w/ US Trade Stuff!: Test US Subtitle",
      author: "Slajus, Jen",
    },
    {
      image:
        "https://edel-images.azureedge.net/ea/OO/images/jacket_covers/original/5000000999_9f56b.jpg",
      title: "Candy Crush Saga-Jason's Story",
      author: "Nesler, NotMax",
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <Link to="/">
            <h2>Back</h2>
          </Link>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={edelweiss2} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Us</h2>
            <p className="fs-15">
              Welcome to our cozy corner of the internet, where the joy of
              reading knows no bounds. 📖✨ Our website is your go-to hub for
              all things books and authors, bringing together book enthusiasts
              from far and wide. 🌟📚
            </p>
            <p className="fs-15">
              Embark on a seamless journey to find the books and authors that
              resonate with your soul. Our user-friendly search feature allows
              you to explore a world of literary wonders with a simple click.
              🕵️‍♀️🔍
              <p className="fs-15">
                Whether you're a casual reader or an avid book collector, our
                website invites you to embark on a journey of literary
                exploration and connection. 🚀📚 Let's turn the pages of
                imagination together and create a story that celebrates the
                magic of books! 🌈✨
              </p>
            </p>
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">
              Here are a few examples of the books in our catalog!
            </h2>
          </div>
          <div className="book-cards">
            {popularBooks.map((book, index) => (
              <BookCard
                key={index}
                image={book.image}
                title={book.title}
                author={book.author}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
