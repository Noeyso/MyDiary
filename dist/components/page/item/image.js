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
var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(title, url) {
        var _this = _super.call(this, "<section class=\"image\">\n\t\t\t\t\t\t<div class=\"image__holder\"><img class=\"image__thumbnail\" /></div>\n\t\t\t\t\t\t<h2 class=\"image__title\"></h2>\n\t\t\t\t\t</section>") || this;
        var imageElement = _this.element.querySelector(".image__thumbnail");
        imageElement.src = url;
        imageElement.alt = title;
        var titleElement = _this.element.querySelector(".image__title");
        titleElement.textContent = title;
        return _this;
    }
    return ImageComponent;
}(BaseComponent));
export { ImageComponent };
//# sourceMappingURL=image.js.map