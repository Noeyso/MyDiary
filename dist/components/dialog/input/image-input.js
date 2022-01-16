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
import { BaseComponent } from "./../../component.js";
var ImageSectionInput = /** @class */ (function (_super) {
    __extends(ImageSectionInput, _super);
    function ImageSectionInput() {
        return _super.call(this, "<div class=\"dialog-form\">\n            <div class=\"form-container\">\n                <label for=\"title\" class=\"dialog-label\">Title</label>\n                <input type=\"text\" id=\"title\" />\n            </div>\n            <div class=\"form-container\">\n                <label for=\"url\" class=\"dialog-label\">URL</label>\n                 <input type=\"text\" id=\"url\" />\n            </div>\n        </div>") || this;
    }
    Object.defineProperty(ImageSectionInput.prototype, "title", {
        get: function () {
            var element = this.element.querySelector("#title");
            return element.value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageSectionInput.prototype, "url", {
        get: function () {
            var element = this.element.querySelector("#url");
            return element.value;
        },
        enumerable: false,
        configurable: true
    });
    return ImageSectionInput;
}(BaseComponent));
export { ImageSectionInput };
//# sourceMappingURL=image-input.js.map