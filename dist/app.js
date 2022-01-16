import { InputDialog, } from "./components/dialog/dialog.js";
import { EmojiSectionInput } from "./components/dialog/input/emoji-input.js";
import { ImageSectionInput } from "./components/dialog/input/image-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { WeatherSectionInput } from "./components/dialog/input/weather-input.js";
import { PageComponent } from "./components/page/page.js";
import { DayComponent } from "./components/day/day.js";
import { NoteComponent } from "./components/day/item/note.js";
import { ImageComponent } from "./components/day/item/image.js";
import { EmotionComponent } from "./components/day/item/emotion.js";
import { WeatherComponent } from "./components/day/item/weather.js";
var App = /** @class */ (function () {
    function App(appRoot, dialogRoot) {
        this.appRoot = appRoot;
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        this.day = new DayComponent();
        //this.day.attachTo(appRoot);
        this.page.addChild(this.day);
        this.bindElementToDialog("#new-note", TextSectionInput, function (input) { return new NoteComponent(input.title, input.body); });
        this.bindElementToDialog("#new-image", ImageSectionInput, function (input) { return new ImageComponent(input.title, input.url); });
        this.bindElementToDialog("#new-emotion", EmojiSectionInput, function (input) { return new EmotionComponent(input.select); });
        this.bindElementToDialog("#new-weather", WeatherSectionInput, function (input) { return new WeatherComponent(input.select); });
    }
    //다이얼로그 열기
    App.prototype.bindElementToDialog = function (selector, InputComponent, makeSection) {
        var _this = this;
        var element = document.querySelector(selector);
        element.addEventListener("click", function () {
            var dialog = new InputDialog();
            var input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(_this.dialogRoot);
            dialog.setOnCloseListener(function () {
                dialog.removeFrom(_this.dialogRoot);
            });
            dialog.setOnSubmitListener(function () {
                var section = makeSection(input);
                _this.day.addChild(section);
                dialog.removeFrom(_this.dialogRoot);
            });
        });
    };
    return App;
}());
new App(document.querySelector(".main"), document.body);
//# sourceMappingURL=app.js.map