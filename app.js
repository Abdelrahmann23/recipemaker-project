const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');

const ingredientRoutes = require('./routes/ingredientRoutes'); // Import routes
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

// Initialize upload directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(uploadDir));

// Set up session middleware before routes
app.use(session({
    secret: 'miu-web-project',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://mayar:OGUn6DxgYMDZg3rH@cluster0.vze3xxe.mongodb.net/mydata?retryWrites=true&w=majority',
        ttl: 3 * 60 * 60 // 3 hours
    }),
    cookie: { secure: false }
}));

// Middleware to make session data available to all templates
app.use((req, res, next) => {
    res.locals.isLoggedIn = req.session.user ? true : false;
    next();
});

// Use the ingredient routes after session middleware
app.use('/', ingredientRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://mayar:OGUn6DxgYMDZg3rH@cluster0.vze3xxe.mongodb.net/mydata?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
