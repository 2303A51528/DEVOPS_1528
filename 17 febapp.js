// app.js
const express = require('express');
const app = express();

app.use(express.json()); // parse JSON bodies

// simple request logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const students = [
  { id: 1, name: "Ravi", department: "CSE" },
  { id: 2, name: "Sita", department: "ECE" }
];

app.get('/', (req, res) => {
  res.send('Welcome to Student Information Management System');
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const student = students.find(s => s.id === id);
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
