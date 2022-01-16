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
var EmotionComponent = /** @class */ (function (_super) {
    __extends(EmotionComponent, _super);
    function EmotionComponent(feeling) {
        var _this = this;
        console.log(feeling);
        _this = _super.call(this, "<section>\n\t\t\t\t\t\t<div class=\"emojiHolder\"><img alt=\"emoji\" class=\"emoji\" /></div>\n\t\t\t\t\t\t<h4 class=\"feeling\"></h4>\n\t\t\t\t\t</section>") || this;
        var emojiElement = _this.element.querySelector(".emoji");
        var textElement = _this.element.querySelector(".feeling");
        switch (feeling) {
            case "happy":
                emojiElement.src = "src/common/image/emoji/happy.png";
                textElement.textContent = "Happy";
                break;
            case "soso":
                emojiElement.src = "src/common/image/emoji/soso.png";
                textElement.textContent = "Soso";
                break;
            case "sad":
                emojiElement.src = "src/common/image/emoji/sad.png";
                textElement.textContent = "Happy";
                break;
            case "angry":
                emojiElement.src = "src/common/image/emoji/angry.png";
                textElement.textContent = "Angry";
                break;
            case "surprised":
                emojiElement.src = "src/common/image/emoji/surprised.png";
                textElement.textContent = "Surprised";
                break;
            case "nervous":
                emojiElement.src = "src/common/image/emoji/nervous.png";
                textElement.textContent = "Nervous";
                break;
            case "tired":
                emojiElement.src = "src/common/image/emoji/tired.png";
                textElement.textContent = "Tired";
                break;
            default:
                throw new Error("feeling type does not match");
        }
        return _this;
    }
    return EmotionComponent;
}(BaseComponent));
export { EmotionComponent };
//# sourceMappingURL=emotion.js.map