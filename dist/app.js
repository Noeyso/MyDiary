import { FeelingComponent } from "./components/page/item/feeling.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { WeatherComponent } from "./components/page/item/weather.js";
import { PageComponent } from "./components/page/page.js";
var App = /** @class */ (function () {
    function App(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        var note = new NoteComponent("오늘 하루", "너무 피곤하다ㅠ");
        this.page.addWriting(note);
        var img = new ImageComponent("image title", "https://picsum.photos/600/300");
        this.page.addChild(img);
        var emoji = new FeelingComponent("happy");
        this.page.addChild(emoji);
        var weather = new WeatherComponent("snow");
        this.page.addChild(weather);
    }
    return App;
}());
new App(document.querySelector(".main"));
//# sourceMappingURL=app.js.map