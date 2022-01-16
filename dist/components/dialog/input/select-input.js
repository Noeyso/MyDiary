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
var SelectItem = /** @class */ (function (_super) {
    __extends(SelectItem, _super);
    function SelectItem(select, type) {
        var _this = _super.call(this, "<div class=\"select-item\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"select-item__input\"/>\n\t\t\t\t\t\t<label for=\"select-item__input\" class=\"select-item__text\"></label>\n\t\t\t\t\t\t<img class=\"select-item__image\" alt=\"image\" />\n\t\t\t\t\t</div>") || this;
        var inputElement = _this.element.querySelector("#select-item__input");
        inputElement.name = type;
        inputElement.value = select;
        var imageElement = _this.element.querySelector(".select-item__image");
        imageElement.src = "src/common/image/".concat(type, "/").concat(select, ".png");
        var textElement = _this.element.querySelector(".select-item__text");
        textElement.textContent = select;
        return _this;
    }
    return SelectItem;
}(BaseComponent));
var SelectSectionInput = /** @class */ (function (_super) {
    __extends(SelectSectionInput, _super);
    function SelectSectionInput(arr, text, type) {
        var _this = _super.call(this, "<form class=\"dalog-form\">\n\t\t\t\t\t\t<h3 class=\"select-title\"></h3>\n\t\t\t\t\t\t<div class=\"select-list\"></div>\n\t\t\t\t\t</form>") || this;
        var title = _this.element.querySelector(".select-title");
        title.textContent = text;
        var container = _this.element.querySelector(".select-list");
        arr.forEach(function (select) {
            var element = new SelectItem(select, type);
            element.attachTo(container);
        });
        _this.selectType = type;
        return _this;
    }
    Object.defineProperty(SelectSectionInput.prototype, "select", {
        get: function () {
            var element = document.getElementsByName(this.selectType);
            element.forEach(function (node) {
                var item = node;
                if (item.checked) {
                    return item.value;
                }
            });
            return "";
        },
        enumerable: false,
        configurable: true
    });
    return SelectSectionInput;
}(BaseComponent));
export { SelectSectionInput };
//# sourceMappingURL=select-input.js.map