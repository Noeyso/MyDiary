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
var InputDialog = /** @class */ (function (_super) {
    __extends(InputDialog, _super);
    function InputDialog() {
        var _this = _super.call(this, "<dialog class=\"dialog\">\n\t\t\t\t\t\t<div class=\"dialog-container\">\n\t\t\t\t\t\t\t<button class=\"dialog-close\">&times;</button>\n    \t\t\t\t\t<div class=\"dialog-body\"></div>\n      \t\t\t\t<button class=\"dialog-submit\">ADD</button>\n\t\t\t\t\t\t</div>\n      \t\t</dialog>") || this;
        var closeBtn = _this.element.querySelector(".dialog-close");
        closeBtn.onclick = function () {
            _this.closeListener && _this.closeListener();
        };
        var submitBtn = _this.element.querySelector(".dialog-submit");
        submitBtn.onclick = function () {
            _this.submitListener && _this.submitListener();
        };
        return _this;
    }
    InputDialog.prototype.addChild = function (child) {
        var body = this.element.querySelector(".dialog-body");
        child.attachTo(body);
    };
    InputDialog.prototype.setOnCloseListener = function (listener) {
        this.closeListener = listener;
    };
    InputDialog.prototype.setOnSubmitListener = function (listener) {
        this.submitListener = listener;
    };
    return InputDialog;
}(BaseComponent));
export { InputDialog };
//# sourceMappingURL=dialog.js.map