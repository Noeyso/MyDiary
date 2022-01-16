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
var DayItemComponent = /** @class */ (function (_super) {
    __extends(DayItemComponent, _super);
    function DayItemComponent() {
        var _this = _super.call(this, "<li class=\"day-item\">\n            <section class=\"day-item__body\"></section>\n            <div class=\"day-item__controls\">\n              <button class=\"close\">&times;</button>\n            </div>\n          </li>") || this;
        var closeBtn = _this.element.querySelector(".close");
        closeBtn.onclick = function () {
            _this.closeListener && _this.closeListener();
        };
        return _this;
    }
    DayItemComponent.prototype.addChild = function (child) {
        var container = this.element.querySelector(".day-item__body");
        child.attachTo(container);
    };
    DayItemComponent.prototype.setOnCloseListener = function (listener) {
        this.closeListener = listener;
    };
    return DayItemComponent;
}(BaseComponent));
var DayComponent = /** @class */ (function (_super) {
    __extends(DayComponent, _super);
    function DayComponent() {
        return _super.call(this, "<div class=\"day-container\">\n\t\t\t\t\t\t<section class=\"writing\"></section>\n\t\t\t\t\t\t<ul class=\"day\"></ul>\n\t\t\t\t\t</div>") || this;
    }
    DayComponent.prototype.addWriting = function (section) {
        var container = this.element.querySelector(".writing");
        section.attachTo(container);
    };
    DayComponent.prototype.addChild = function (section) {
        var container = this.element.querySelector(".day");
        var item = new DayItemComponent();
        item.addChild(section);
        item.attachTo(container, "beforeend");
        item.setOnCloseListener(function () {
            item.removeFrom(container);
        });
    };
    return DayComponent;
}(BaseComponent));
export { DayComponent };
//# sourceMappingURL=day.js.map