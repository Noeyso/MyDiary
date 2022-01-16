import { BaseComponent } from "../../component.js";
import { EmojiData } from "../dialog.js";
class EmojiItem extends BaseComponent<HTMLElement> {
  constructor(emotion: string) {
    super(`<div class="select-item">
						<input type="radio" id="select-item__input" name="emoji"/>
						<label for="select-item__input" class="select-item__text"></label>
						<img class="select-item__image" alt="image" />
					</div>`);

    const inputElement = this.element.querySelector(
      "#select-item__input"
    )! as HTMLInputElement;
    inputElement.value = emotion;

    const imageElement = this.element.querySelector(
      ".select-item__image"
    )! as HTMLImageElement;
    imageElement.src = `src/common/image/emoji/${emotion}.png`;

    const textElement = this.element.querySelector(
      ".select-item__text"
    )! as HTMLSpanElement;
    textElement.textContent = emotion;
  }
}

export class EmojiSectionInput
  extends BaseComponent<HTMLElement>
  implements EmojiData
{
  emotions = ["happy", "soso", "sad", "angry", "surprised", "nervous", "tired"];
  constructor() {
    super(`<form class="dialog-form">
						<h3>오늘 기분은 어땠나요?</h3>
						<div class="select-list"></div>
					</form>`);
    const container = this.element.querySelector(
      ".select-list"
    )! as HTMLElement;
    this.emotions.forEach((emotion) => {
      const item = new EmojiItem(emotion);
      item.attachTo(container);
    });
  }

  get select(): string {
    let emotion: string = "";
    const element = document.getElementsByName("emoji");
    element.forEach((node) => {
      const item = node! as HTMLInputElement;
      if (item.checked) {
        console.log(item.value);
        emotion = item.value;
      }
    });
    return emotion;
  }
}
