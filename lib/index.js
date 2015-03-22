var namedRouter = {
    names : {},
    set : function(names){
        this.names = names;
        return this;
    },
    url : function(name,params){
        if (typeof this.names[name] == 'undefined'){
            return '';
        }

        if (typeof params != 'undefined'){
            var temp = this.names[name];
            for (var a in params){
                temp = temp.replace(':'+ a,params[a]);
            }
            return temp;
        }

        return this.names[name];
    },
    use : function(req,res,next){
        res.locals.Route = namedRouter;
        next();
    }
};

module.exports = namedRouter;