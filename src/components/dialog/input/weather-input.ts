import { BaseComponent } from "../../component.js";
import { WeatherData } from "../dialog.js";
class WeatherItem extends BaseComponent<HTMLElement> {
  constructor(weather: string) {
    super(`<div class="select-item">
						<input type="radio" id="select-item__input" name="weather"/>
						<label for="select-item__input" class="select-item__text"></label>
						<img class="select-item__image" alt="image" />
					</div>`);
    const inputElement = this.element.querySelector(
      "#select-item__input"
    )! as HTMLInputElement;
    inputElement.value = weather;

    const imageElement = this.element.querySelector(
      ".select-item__image"
    )! as HTMLImageElement;
    imageElement.src = `src/common/image/weather/${weather}.png`;

    const textElement = this.element.querySelector(
      ".select-item__text"
    )! as HTMLSpanElement;
    textElement.textContent = weather;
  }
}

export class WeatherSectionInput
  extends BaseComponent<HTMLElement>
  implements WeatherData
{
  weathers = [
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
  constructor() {
    super(`<form class="dialog-form">
						<h3>오늘 날씨는 어땠나요?</h3>
						<div class="select-list"></div>
					</form>`);
    const container = this.element.querySelector(
      ".select-list"
    )! as HTMLElement;
    this.weathers.forEach((weather) => {
      const item = new WeatherItem(weather);
      item.attachTo(container);
    });
  }
  get select(): string {
    let weather: string = "";
    const element = document.getElementsByName("weather");
    element.forEach((node) => {
      const item = node! as HTMLInputElement;
      if (item.checked) {
        console.log(item.value);
        weather = item.value;
      }
    });
    return weather;
  }
}
