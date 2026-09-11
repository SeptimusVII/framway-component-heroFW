module.exports = function(app){
    var HeroFW = Object.getPrototypeOf(app).HeroFW = new app.Component("heroFW");
    // HeroFW.debug = true;
    HeroFW.createdAt      = "2.0.0";
    HeroFW.lastUpdate     = "2.6.0";
    HeroFW.version        = "1.0.4";
    // HeroFW.factoryExclude = true;
    // HeroFW.loadingMsg     = "This message will display in the console when component will be loaded.";
    // HeroFW.requires       = [];

    HeroFW.prototype.onCreate = function(){
        var heroFW = this;
        heroFW.content = {$el : heroFW.$el.find('.heroFW__content'),};
        heroFW.setHeight();
    }

    HeroFW.prototype.onResize = function(){
        var heroFW = this;
        heroFW.setHeight();
    }

    HeroFW.prototype.setHeight = function() {
        var heroFW = this;
        var heightBox = 0;
        if(heroFW.$el.data('height') && heroFW.$el.data('height') != ""){
            heightBox = heroFW.$el.data('height');
            if(heroFW.$el.data('height') == "viewport")
                heightBox = utils.getViewportHeight();
        }
        if(heightBox != 0)
            heroFW.$el.css('height',heightBox);
        return heroFW;
    };
    return HeroFW;
}