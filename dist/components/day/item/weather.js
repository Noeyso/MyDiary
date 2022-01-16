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
var WeatherComponent = /** @class */ (function (_super) {
    __extends(WeatherComponent, _super);
    function WeatherComponent(weather) {
        var _this = _super.call(this, "<section>\n\t\t\t\t\t\t<div class=\"weatherHolder\"><img alt=\"weather\" class=\"weather\" /></div>\n\t\t\t\t\t\t<h4 class=\"comment\"></h4>\n\t\t\t\t\t</section>") || this;
        var weatherElement = _this.element.querySelector(".weather");
        var textElement = _this.element.querySelector(".comment");
        switch (weather) {
            case "sunny":
                weatherElement.src = "src/common/image/weather/sunny.png";
                textElement.textContent = "Sunny";
                break;
            case "cloudy":
                weatherElement.src = "src/common/image/weather/cloudy.png";
                textElement.textContent = "Cloudy";
                break;
            case "windy":
                weatherElement.src = "src/common/image/weather/windy.png";
                textElement.textContent = "Windy";
                break;
            case "rainy":
                weatherElement.src = "src/common/image/weather/rainy.png";
                textElement.textContent = "Rainy";
                break;
            case "snow":
                weatherElement.src = "src/common/image/weather/snow.png";
                textElement.textContent = "Snow";
                break;
            case "stormy":
                weatherElement.src = "src/common/image/weather/stormy.png";
                textElement.textContent = "Stormy";
                break;
            case "fog":
                weatherElement.src = "src/common/image/weather/fog.png";
                textElement.textContent = "Fog";
                break;
            case "hot":
                weatherElement.src = "src/common/image/weather/hot.png";
                textElement.textContent = "Hot";
                break;
            case "cold":
                weatherElement.src = "src/common/image/weather/cold.png";
                textElement.textContent = "Cold";
                break;
            default:
                throw new Error("feeling type does not match");
        }
        return _this;
    }
    return WeatherComponent;
}(BaseComponent));
export { WeatherComponent };
//# sourceMappingURL=weather.js.map