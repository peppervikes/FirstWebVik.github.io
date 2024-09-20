const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for each page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/subscription', (req, res) => res.sendFile(path.join(__dirname, 'views', 'subscription.html')));
app.get('/faqs', (req, res) => res.sendFile(path.join(__dirname, 'views', 'faqs.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));
app.get('/Work', (req, res) => res.sendFile(path.join(__dirname, 'views', 'Work.html')));
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
