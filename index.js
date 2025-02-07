const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.send('About Us');
})
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json());

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json()); //Middleware

app.use((req, res, next) => { //Logging Middleware
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use((err, req, res, next) => { //Error Handling
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const item = ['Apple', 'Banana', 'Orange'];

app.get('/items', (req, res) => {
    res.json(item);
});

app.post('/items', (req, res) => {
    const data = req.body.item;
    items.push(newItem);
    res.json(items);
});