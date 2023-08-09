# Catalog Viewer

Hi lovely software development team at Above the Treeline -- Edelweiss! I will be giving a brief overview of my project layout and design.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Project Overview

This repository contains the source code for a book enthusiast website built using React and React Router. The website provides a platform for book lovers to explore, search for books and authors, and discover new literary adventures.

**Key Features:**
- Utilizes React for building a dynamic and responsive user interface.
- Implements React Router for smooth navigation between different pages.
- Incorporates a data context (AppProvider) to manage and share global state across components.
- Includes pages for the home, about, and book listings sections.
- Renders book information using reusable components, such as BookList and BookCard.

# src directory 

-> **index.js and index.css files**
- This code sets up a React application with client-side routing using react-router-dom, rendering different components based on the URL path, and using a global state provider.

-> **data.json and Data.js files**
- This code defines a React context and provider to manage global state for a book catalog application. It initializes and updates the search term, fetches books based on the search term from a JSON data source, and provides access to various catalog-related data for the application components to use.
- The JSON file was copied and pasted into data.json

# components directory 

-> **Books**
- Book.jsx: The given code is a React component named "Book" that represents a book item. It takes a "book" object as a prop and displays its details, including the book's cover image, title, author, edition, and publication year. If an image is available, it is displayed; otherwise, a default "No cover found" image is shown. The component uses React Router's "Link" to create a link to the book's details page based on its SKU.
- BookList.jsx and BookList.css: BookList.jsx defines a React component named "BookList" that uses the "useGlobalContext" hook to retrieve a list of books and then maps through the list to render individual book items using the "Book" component. BookList.css contains CSS styles that define the layout and appearance of the book list and its individual book items. The book items are displayed in a grid layout with responsive widths and styling, including hover effects and font styles for book details. Together, these codes create a dynamic book list component that fetches and displays books using React and styled with CSS.

-> **Header**
- Header.jsx and Header.css: The provided code defines a React component called "Header," which represents the top section of a web page. It contains a navigation bar ("Navbar"), a search input field ("Search"), and a dynamic content display based on whether a search has been performed. 

-> **Navbar**
- Navbar.jsx and Navbar.css: The provided code defines a React component called "Navbar," which represents the navigation bar of a website. It features the brand logo ("EdelweissLogo") with a site name, a responsive menu toggle button ("HiOutlineMenuAlt3") that activates a collapsible menu when clicked, and a navigation link to an "About" page. The component offers a user-friendly navigation experience with a toggleable menu for easy access to different sections of the website.

-> **Search**
- Search.jsx and Search.css: The provided code defines a React component called "Search," which presents a search bar and button for users to search for authors or book titles. It utilizes the "FaSearch" icon from the "react-icons" library to display a search icon. The component interacts with the "useGlobalContext" hook to manage the search term state. Upon submission, the entered search term is stored, and a callback function "onSearchPerformed" is triggered, initiating a search for the specified term.

## Features

- Search for books by author or title
- Cards will present with image of book, title, author, edition and publish year


## Installation

1. Clone the repository: `git clone https://github.com/Melissamichaud1/catalog_viewer`
2. Navigate to the project directory: `cd catalog_viewer`
3. Install dependencies: `npm install`

## Usage

![Screen Shot 2023-08-09 at 1 25 50 AM](https://github.com/Melissamichaud1/catalog_viewer/assets/111532904/e7fefcb5-1b33-4479-9320-dd81ef5d1ee3)
![Screen Shot 2023-08-09 at 1 54 53 AM](https://github.com/Melissamichaud1/catalog_viewer/assets/111532904/96c6274d-a423-43b9-a033-3b6a947595df)
![Screen Shot 2023-08-09 at 1 51 49 AM](https://github.com/Melissamichaud1/catalog_viewer/assets/111532904/10e38a5a-c7bf-4135-ac3e-23336458ecf0)
![Screen Shot 2023-08-09 at 1 51 57 AM](https://github.com/Melissamichaud1/catalog_viewer/assets/111532904/d492ac65-b97d-462e-8056-4eb156cc006d)



## Technologies Used

- React/ Javascript
- CSS
- React-router-dom
- Google fonts
- 


