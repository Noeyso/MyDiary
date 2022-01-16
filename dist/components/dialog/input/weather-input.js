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
var WeatherItem = /** @class */ (function (_super) {
    __extends(WeatherItem, _super);
    function WeatherItem(weather) {
        var _this = _super.call(this, "<div class=\"select-item\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"select-item__input\" name=\"weather\"/>\n\t\t\t\t\t\t<label for=\"select-item__input\" class=\"select-item__text\"></label>\n\t\t\t\t\t\t<img class=\"select-item__image\" alt=\"image\" />\n\t\t\t\t\t</div>") || this;
        var inputElement = _this.element.querySelector("#select-item__input");
        inputElement.value = weather;
        var imageElement = _this.element.querySelector(".select-item__image");
        imageElement.src = "src/common/image/weather/".concat(weather, ".png");
        var textElement = _this.element.querySelector(".select-item__text");
        textElement.textContent = weather;
        return _this;
    }
    return WeatherItem;
}(BaseComponent));
var WeatherSectionInput = /** @class */ (function (_super) {
    __extends(WeatherSectionInput, _super);
    function WeatherSectionInput() {
        var _this = _super.call(this, "<form class=\"dialog-form\">\n\t\t\t\t\t\t<h3>\uC624\uB298 \uB0A0\uC528\uB294 \uC5B4\uB560\uB098\uC694?</h3>\n\t\t\t\t\t\t<div class=\"select-list\"></div>\n\t\t\t\t\t</form>") || this;
        _this.weathers = [
            "sunny",
            "cloudy",
            "windy",
            "rainy",
            "snow",
            "stormy",
            "fog",
            "hot",
            "cold",
        ];
        var container = _this.element.querySelector(".select-list");
        _this.weathers.forEach(function (weather) {
            var item = new WeatherItem(weather);
            item.attachTo(container);
        });
        return _this;
    }
    Object.defineProperty(WeatherSectionInput.prototype, "select", {
        get: function () {
            var weather = "";
            var element = document.getElementsByName("weather");
            element.forEach(function (node) {
                var item = node;
                if (item.checked) {
                    console.log(item.value);
                    weather = item.value;
                }
            });
            return weather;
        },
        enumerable: false,
        configurable: true
    });
    return WeatherSectionInput;
}(BaseComponent));
export { WeatherSectionInput };
//# sourceMappingURL=weather-input.js.map