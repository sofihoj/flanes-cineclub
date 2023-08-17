const controller = {
    index: (req, res) => {
        res.render('index');
    },
    movies: (req, res) => {
        res.render('pastMovies')
    }
}

module.exports = controller;