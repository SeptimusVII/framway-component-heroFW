module.exports = function(){
    let Hero = Object.getPrototypeOf(fw).Hero = class Hero extends fw.Component{
        static {
            this.debug = false;
            this.createdAt  = "3.0.0";
            this.lastUpdate = "3.0.0";
            this.version = "2.0.0";
            this.tpl = utils.getNodeFromString(require('bundle-tpl:./hero.html')).outerHTML;
            // this.describe();
        }
        onCreate(){
            this.heightBox ??= this.getData('height',0);
            this.setHeight();
        }
        onResize(){
            if(this.heightBox == "viewport")
                this.setHeight();
        }
        setHeight() {
            let targetHeight = 0;
            if(this.heightBox && this.heightBox != ""){
                targetHeight = this.heightBox;
                if(this.heightBox == "viewport")
                    targetHeight = utils.getViewportHeight() + 'px';
            }
            if(targetHeight != 0){
                this.el.style.height = targetHeight;
            }
            return this;
        }
    }
    return Hero;
}