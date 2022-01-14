import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
var App = /** @class */ (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        var img = new ImageComponent("image title", "https://picsum.photos/600/300");
        this.page.addChild(img);
        // const emoji = new FeelingComponent("happy");
        // this.page.addChild(emoji);
    }
    return App;
}());
new App(document.querySelector(".main"));
//# sourceMappingURL=app.js.map