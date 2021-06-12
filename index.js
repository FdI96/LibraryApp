const bookArr = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function oneBook(book) {
  const bigTag = document.createElement("div");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("type", "submit");
  bigTag.setAttribute("id", book.name + book.author);
  deleteButton.setAttribute("class", "btn btn-danger");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", () => {
    const listDelete = document.getElementById(book.name + book.author);
    const father = document.getElementById("booklist");
    father.removeChild(listDelete);
  });
  bigTag.appendChild(deleteButton);
  const title = document.createElement("h3");
  title.innerHTML = book.name;
  bigTag.appendChild(title);
  const list = document.createElement("ul");
  const itemAuthor = document.createElement("li");
  const itemPages = document.createElement("li");
  const itemRead = document.createElement("li");
  itemRead.setAttribute("id", "itemReadId");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("checked", book.read);
  itemRead.appendChild(checkbox);
  const label = document.createElement("label");
  label.setAttribute("for", "itemReadId");
  label.innerHTML = "read";
  itemRead.appendChild(label);
  itemAuthor.innerHTML = book.author;
  itemPages.innerHTML = book.pages;
  list.appendChild(itemAuthor);
  list.appendChild(itemPages);
  list.appendChild(itemRead);
  bigTag.appendChild(list);
  return bigTag;
}

function showBooksList(booksCollection) {
  const element = document.getElementById("booklist");
  element.innerHTML = null;
  for (let index = 0; index < booksCollection.length; index += 1) {
    const tag = oneBook(booksCollection[index]);
    element.appendChild(tag);
  }
}

function addBookToLibrary() {
  const target = document.getElementById("button");
  target.addEventListener("click", (event) => {
    event.preventDefault();
    const valuesArr = [];
    const elementName = document.getElementById("name");
    valuesArr.push(elementName.value);
    const elementAuthor = document.getElementById("author");
    valuesArr.push(elementAuthor.value);
    const elementPages = document.getElementById("pages");
    valuesArr.push(elementPages.value);
    const elementRead = document.getElementById("read");
    valuesArr.push(elementRead.checked);
    const book = new Book(...valuesArr);
    bookArr.push(book);
    showBooksList(bookArr);
  });
}

addBookToLibrary();
