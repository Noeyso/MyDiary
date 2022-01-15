import { BaseComponent } from "../../component.js";

export class WeatherComponent extends BaseComponent<HTMLElement> {
  constructor(weather: string) {
    super(`<section>
						<div class="weatherHolder"><img alt="weather" class="weather" /></div>
						<h4 class="comment"></h4>
					</section>`);

    const weatherElement = this.element.querySelector(
      ".weather"
    )! as HTMLImageElement;
    const textElement = this.element.querySelector(
      ".comment"
    )! as HTMLHeadElement;

    switch (weather) {
      case "sunny":
        weatherElement.src = "src/common/image/weather/sunny.png";
        textElement.textContent = "Sunny";
        break;
      case "cloudy":
        weatherElement.src = "src/common/image/weather/clouds.png";
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
        weatherElement.src = "src/common/image/weather/mist.png";
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
  }
}
