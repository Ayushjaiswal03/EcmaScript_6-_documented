let books = JSON.parse(localStorage.getItem("books")) || [];

// Function to add a new book
function addBook() {
  const bookInput = document.getElementById("bookName");
  const bookName = bookInput.value.trim();

  if (bookName === "") return;

  // Create new book object
  const newBook = {
    name: bookName,
    read: false
  };

  // Add to books array
  books.push(newBook);

  // Update localStorage
  localStorage.setItem("books", JSON.stringify(books));

  // Re-render list
  renderBooks();

  // Clear input
  bookInput.value = "";
}

// Function to toggle the read status
function toggleRead(index) {
  books[index].read = !books[index].read;
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
}

// Function to delete a book
function deleteBook(index) {
  books.splice(index, 1);
  localStorage.setItem("books", JSON.stringify(books));
  renderBooks();
}

// Function to render the book list
function renderBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const li = document.createElement("li");
    li.textContent = book.name;

    // Add green background if read
    if (book.read) {
      li.classList.add("read");
    }

    // Toggle read on click
    li.addEventListener("click", function () {
      toggleRead(index);
    });

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");

    // Prevent toggle when clicking delete
    delBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      deleteBook(index);
    });

    li.appendChild(delBtn);
    bookList.appendChild(li);
  });
}

// Add background green for read books
const style = document.createElement("style");
style.textContent = `
  .read {
    background-color: green !important;
    color: white;
  }
`;
document.head.appendChild(style);

// Render books on page load
renderBooks();
