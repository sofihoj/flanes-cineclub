const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const mainRoutes = require('./routes/mainRoutes');
const usersRoutes = require('./routes/usersRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

require('dotenv').config();
const PORT = parseInt(process.env.PORT);

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(session({
    secret:"It's a secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(methodOverride('_method'));

app.use('/', mainRoutes);
app.use('/admin', adminRoutes)
app.use('/user', usersRoutes)

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));