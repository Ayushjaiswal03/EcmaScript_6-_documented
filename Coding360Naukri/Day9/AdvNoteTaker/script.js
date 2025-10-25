// ======== NOTE TAKER ADVANCE ========

// Runs automatically when the page loads
window.onload = displayNotes;

// ---  Save a new note ---
function saveNote() {
  const titleInput = document.getElementById("noteTitle");
  const contentInput = document.getElementById("noteContent");

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();

  // Validation: ensure both fields are filled
  if (!title || !content) {
    alert("Please enter both title and content before saving!");
    return;
  }

  // Retrieve existing notes or create empty array
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Create new note object
  const newNote = {
    id: Date.now(),
    title: title,
    content: content
  };

  // Add to the array & save to localStorage
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));

  // Clear input fields
  titleInput.value = "";
  contentInput.value = "";

  // Re-render updated notes list
  displayNotes();
}

// ---  Display notes on screen ---
function displayNotes() {
  const notesList = document.getElementById("notesList");
  const template = document.getElementById("noteTemplate");
  notesList.innerHTML = ""; // Clear previous notes

  const notes = JSON.parse(localStorage.getItem("notes")) || [];

  // Loop through each note and display it
  notes.forEach(note => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".note-title").textContent = note.title;
    clone.querySelector(".note-content").textContent = note.content;

    // Add remove functionality to checkbox click
    const checkbox = clone.querySelector(".note-checkbox");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) deleteNote(note.id);
    });

    notesList.appendChild(clone);
  });
}

