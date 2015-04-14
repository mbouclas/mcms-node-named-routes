var lodash = require('lodash');
var namedRouter = {
    absolute : true,
    names : {},
    get : function(name) {
        return this.names[name] || '';
    },
    set : function(names,base){
        if (base){
            for (var a in names){
                names[a] = base + names[a];
            }
        }
        this.names = lodash.merge(names,this.names);
        return this;
    },
    url : function(name,params){
        if (typeof this.names[name] == 'undefined'){
            return '';
        }
        var prefix = (this.absolute) ? '/' : '';

        if (typeof params != 'undefined'){
            var temp = this.names[name];
            for (var a in params){
                temp = temp.replace(':'+ a,params[a]);
            }
            return prefix + temp;
        }


        return prefix + this.names[name];
    },
    use : function(req,res,next){
        res.locals.Route = namedRouter;
        next();
    }
};

module.exports = namedRouter;