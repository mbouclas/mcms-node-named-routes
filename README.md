mcms-node-named-routes
======================

Dead simple approach on creating named routes for express 4

## What does it do
This packages allows you to add named routes on express 4.

## Install
npm install mcms-node-named-routes

## Usage
check [the examples folder](https://github.com/mbouclas/mmcms-node-named-routes/tree/master/examples) for usage scenarios
Initialize like so :
```
var Route = require('mcms-node-named-routes');
```
Then add your routes

```
  var names = {
    Home : '/',
    Login : '/login',
    Logout : '/logout',
    Complex : '/complex/:param1/:param2'
  };

  Route.set(names);
```

Finally, if you want the reverse lookup functionality in your express templates, just add it tou the express router.

```
var router = express.Router();
router.use(Route.use);
```

or you can use it as middleware:

```
var routes = require('./routes/index')(Route); //declare your named routes in here like the example above
app.use('/',Route.use,routes);
```

That's it, now you can use the reverse lookup in your templates like so :

```
<a href="{{ Route.url('Home') }}">Home</a>
<a href="{{ Route.url('Complex',{param1 : 'test', param2 : 20}) }}">a more complex route</a>
```
