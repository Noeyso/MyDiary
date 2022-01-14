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
var PageItemComponent = /** @class */ (function (_super) {
    __extends(PageItemComponent, _super);
    function PageItemComponent() {
        return _super.call(this, "<li class=\"page-item\">\n            <section class=\"page-item__body\"></section>\n            <div class=\"page-item__controls\">\n              <button class=\"close\">&times;</button>\n            </div>\n          </li>") || this;
    }
    PageItemComponent.prototype.addChild = function (child) {
        var container = this.element.querySelector(".page-item__body");
        child.attachTo(container);
    };
    return PageItemComponent;
}(BaseComponent));
var PageComponent = /** @class */ (function (_super) {
    __extends(PageComponent, _super);
    function PageComponent() {
        return _super.call(this, '<ul class="page"></ul>') || this;
    }
    PageComponent.prototype.addChild = function (section) {
        var item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, "beforeend");
    };
    return PageComponent;
}(BaseComponent));
export { PageComponent };
//# sourceMappingURL=page.js.map