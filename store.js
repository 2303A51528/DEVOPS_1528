const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: "JavaScript Basics", author: "John Doe" },
  { id: 2, title: "Learn Node.js", author: "Jane Smith" }
];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).send("Book not found");
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

// DELETE book
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(b => b.id !== id);
  res.json({ message: "Book deleted" });
});

app.listen(3000, () => console.log("Bookstore API running on port 3000"));
