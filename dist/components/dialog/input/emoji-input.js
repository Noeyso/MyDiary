var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { BaseComponent } from "../../component.js";
var EmojiItem = /** @class */ (function (_super) {
    __extends(EmojiItem, _super);
    function EmojiItem(emotion) {
        var _this = _super.call(this, "<div class=\"select-item\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"select-item__input\" name=\"emoji\"/>\n\t\t\t\t\t\t<label for=\"select-item__input\" class=\"select-item__text\"></label>\n\t\t\t\t\t\t<img class=\"select-item__image\" alt=\"image\" />\n\t\t\t\t\t</div>") || this;
        var inputElement = _this.element.querySelector("#select-item__input");
        inputElement.value = emotion;
        var imageElement = _this.element.querySelector(".select-item__image");
        imageElement.src = "src/common/image/emoji/".concat(emotion, ".png");
        var textElement = _this.element.querySelector(".select-item__text");
        textElement.textContent = emotion;
        return _this;
    }
    return EmojiItem;
}(BaseComponent));
var EmojiSectionInput = /** @class */ (function (_super) {
    __extends(EmojiSectionInput, _super);
    function EmojiSectionInput() {
        var _this = _super.call(this, "<form class=\"dialog-form\">\n\t\t\t\t\t\t<h3>\uC624\uB298 \uAE30\uBD84\uC740 \uC5B4\uB560\uB098\uC694?</h3>\n\t\t\t\t\t\t<div class=\"select-list\"></div>\n\t\t\t\t\t</form>") || this;
        _this.emotions = ["happy", "soso", "sad", "angry", "surprised", "nervous", "tired"];
        var container = _this.element.querySelector(".select-list");
        _this.emotions.forEach(function (emotion) {
            var item = new EmojiItem(emotion);
            item.attachTo(container);
        });
        return _this;
    }
    Object.defineProperty(EmojiSectionInput.prototype, "select", {
        get: function () {
            var emotion = "";
            var element = document.getElementsByName("emoji");
            element.forEach(function (node) {
                var item = node;
                if (item.checked) {
                    console.log(item.value);
                    emotion = item.value;
                }
            });
            return emotion;
        },
        enumerable: false,
        configurable: true
    });
    return EmojiSectionInput;
}(BaseComponent));
export { EmojiSectionInput };
//# sourceMappingURL=emoji-input.js.map