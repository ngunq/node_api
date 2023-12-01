const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Sample data (in-memory)
let sampleData = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
];

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the Sample Node.js API');
});

// Get all items
app.get('/items', (req, res) => {
    res.json(sampleData);
});

// Get an item by ID
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = sampleData.find((item) => item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ error: 'Item not found' });
    }
});

// Create a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = sampleData.length + 1;
    sampleData.push(newItem);
    res.status(201).json(newItem);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
