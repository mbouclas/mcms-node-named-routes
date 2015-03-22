var Route = require('../index.js');

var routes = {
    Home : '/',
    Login : '/login',
    Logout : '/logout',
    Complex : '/complex/:param1/:param2'
};

Route.set(routes);


console.log(Route.url('Logout'));