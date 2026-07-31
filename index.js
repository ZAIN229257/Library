const myLibrary = [];

class Book {
  constructor(id, title, name) {
    this.id = id;
    this.Title = title;
    this.name = name;
  }
  read() {
    console.log("Reading...");
  }
}

function addBookToLibrary() {
  const bookId = document.getElementById("bookId");
  const bookTitle = document.getElementById("bookTitle");
  const bookAuthor = document.getElementById("bookAuthor");
  const addBtn = document.getElementById("addBtn");

  const libraryContainer = document.getElementById("library");

  addBtn.addEventListener("click", function () {
    const userbookId = bookId.value;
    const userbookTitle = bookTitle.value;
    const userbookAuthor = bookAuthor.value;

    const newbook = new Book(userbookId, userbookTitle, userbookAuthor);
    myLibrary.push(newbook);

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const titleElement = document.createElement("h3");
    titleElement.textContent = `Title: ${userbookTitle}`;

    const authorElement = document.createElement("p");
    authorElement.textContent = `Author: ${userbookAuthor}`;

    const idElement = document.createElement("small");
    idElement.textContent = `id: ${userbookId}`;

    const readText = document.createElement("p");
    readText.textContent = "Read: ";

    const cbox = document.createElement("input");
    cbox.type = "checkbox";

    readText.appendChild(cbox);

    const dButton = document.createElement("button");
    dButton.textContent = "delet";

    dButton.addEventListener("click", function () {
      const index = myLibrary.indexOf(newbook);

      myLibrary.splice(index, 1);
      bookCard.remove();
    });

    libraryContainer.appendChild(bookCard);

    bookCard.appendChild(titleElement);
    bookCard.appendChild(authorElement);
    bookCard.appendChild(idElement);
    bookCard.appendChild(readText);
    bookCard.appendChild(dButton);
    bookId.value = "";
    bookTitle.value = "";
    bookAuthor.value = "";
  });
}

addBookToLibrary();
