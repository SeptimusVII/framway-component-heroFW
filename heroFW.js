module.exports = function(app){
    var HeroFW = Object.getPrototypeOf(app).HeroFW = new app.Component("heroFW");
    //HeroFW.debug = true;
    HeroFW.createdAt      = "2.0.0";
    HeroFW.lastUpdate     = "2.0.0";
    HeroFW.version        = "1";
    // HeroFW.factoryExclude = true;
    // HeroFW.loadingMsg     = "This message will display in the console when component will be loaded.";
    // HeroFW.requires       = [];

    // HeroFW.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return HeroFW;
}