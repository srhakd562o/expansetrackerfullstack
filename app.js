const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/expansedatabase');
const expanseRoutes = require('./routes/expanseRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/expanses', expanseRoutes);

// Catch all other routes and return index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'expanse.html'));
});

// Sync all models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Unable to synchronize database:', error);
    });
