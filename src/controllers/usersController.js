const usersController = {
    signup: (req, res) => {
        res.render('users/signup')
    },
    login: (req, res) => {
        res.render('users/login');
    },
    profile: (req, res) => {
        res.render('users/profile');
    },
    movies: (req, res) => {
        res.render('users/myMovies');
    }
}


module.exports = usersController;