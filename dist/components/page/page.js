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
import { BaseComponent } from "./../component.js";
import { NothingComponent } from "./nothing.js";
var PageItemComponent = /** @class */ (function (_super) {
    __extends(PageItemComponent, _super);
    function PageItemComponent(dateString) {
        var _this = _super.call(this, "<li class=\"page-item\">\n\t\t\t\t\t\t<div class=\"page-item-index\">\n\t\t\t\t\t\t\t<h1 class=\"date\"></h1>\n\t\t\t\t\t\t\t<div class=\"page-item__controls\">\n\t\t\t\t\t\t\t\t<button class=\"close\">&times;</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n            <section class=\"page-item__body\"></section>\n          </li>") || this;
        var closeBtn = _this.element.querySelector(".close");
        closeBtn.onclick = function () {
            _this.closeListener && _this.closeListener();
        };
        var date = _this.element.querySelector(".date");
        date.textContent = dateString;
        return _this;
    }
    PageItemComponent.prototype.setOnCloseListener = function (listener) {
        this.closeListener = listener;
    };
    PageItemComponent.prototype.addChild = function (child) {
        var container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    };
    return PageItemComponent;
}(BaseComponent));
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent() {
        var _this = _super.call(this, "<ul class=\"page\"></ul>") || this;
        _this.nothingElement = new NothingComponent();
        return _this;
    }
    PageComponent.prototype.noChild = function () {
        this.nothingElement.attachTo(this.element);
    };
    PageComponent.prototype.addChild = function (section, dayString) {
        var _this = this;
        var nothing = this.element.querySelector(".noChild");
        if (nothing !== null) {
            this.element.removeChild(nothing);
        }
        var item = new PageItemComponent(dayString);
        item.addChild(section);
        item.attachTo(this.element, "afterbegin");
        item.setOnCloseListener(function () {
            item.removeFrom(_this.element);
            if (!_this.element.hasChildNodes()) {
                _this.noChild();
            }
        });
    };
    return PageComponent;
}(BaseComponent));
export { PageComponent };
//# sourceMappingURL=page.js.map