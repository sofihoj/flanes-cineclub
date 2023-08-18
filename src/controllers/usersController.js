const usersController = {
    signup: (req, res) => {
        res.render('users/signup')
    },
    login: (req, res) => {
        res.render('users/login');
    }
}

module.exports = usersController;