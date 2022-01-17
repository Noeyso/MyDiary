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
import { BaseComponent } from "../component.js";
var NothingComponent = /** @class */ (function (_super) {
    __extends(NothingComponent, _super);
    function NothingComponent() {
        return _super.call(this, "<div>\uC77C\uAE30\uAC00 \uC5C6\uC5B4\uC694,, \uCD94\uAC00\uD574\uC8FC\uC138\uC694 :)</div>") || this;
    }
    return NothingComponent;
}(BaseComponent));
export { NothingComponent };
//# sourceMappingURL=nothing.js.map