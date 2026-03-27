const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Endpoint to save selections
app.post('/save-selection', (req, res) => {
    const selection = req.body;
    const dataToSave = `${new Date().toISOString()}: ${JSON.stringify(selection)}\n`;

    fs.appendFile('selections.log', dataToSave, (err) => {
        if (err) {
            console.error('Error saving selection:', err);
            return res.status(500).send('Error saving selection.');
        }
        res.status(200).send('Selection saved.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
