import { BaseComponent } from "../../component.js";
class SelectItem extends BaseComponent<HTMLElement> {
  constructor(select: string, type: string) {
    super(`<div class="select-item">
						<input type="radio" id="select-item__input"/>
						<label for="select-item__input" class="select-item__text"></label>
						<img class="select-item__image" alt="image" />
					</div>`);

    const inputElement = this.element.querySelector(
      "#select-item__input"
    )! as HTMLInputElement;
    inputElement.name = type;
    inputElement.value = select;

    const imageElement = this.element.querySelector(
      ".select-item__image"
    )! as HTMLImageElement;
    imageElement.src = `src/common/image/${type}/${select}.png`;

    const textElement = this.element.querySelector(
      ".select-item__text"
    )! as HTMLSpanElement;
    textElement.textContent = select;
  }
}

export class SelectSectionInput extends BaseComponent<HTMLElement> {
  selectType: string;
  constructor(arr: string[], text: string, type: string) {
    super(`<form class="dalog-form">
						<h3 class="select-title"></h3>
						<div class="select-list"></div>
					</form>`);
    const title = this.element.querySelector(
      ".select-title"
    )! as HTMLHeadElement;
    title.textContent = text;
    const container = this.element.querySelector(
      ".select-list"
    )! as HTMLElement;
    arr.forEach((select) => {
      const element = new SelectItem(select, type);
      element.attachTo(container);
    });
    this.selectType = type;
  }

  get select(): string {
    const element = document.getElementsByName(this.selectType);
    element.forEach((node) => {
      const item = node! as HTMLInputElement;
      if (item.checked) {
        return item.value;
      }
    });
    return "";
  }
}
