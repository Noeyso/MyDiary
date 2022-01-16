import { BaseComponent, Component } from "./../component.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface ImageData {
  readonly title: string;
  readonly url: string;
}
export interface TextData {
  readonly title: string;
  readonly body: string;
}
export interface EmojiData {
  readonly select: string;
}
export interface WeatherData {
  readonly select: string;
}
export class InputDialog extends BaseComponent<HTMLElement> {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
						<div class="dialog-container">
							<button class="dialog-close">&times;</button>
    					<div class="dialog-body"></div>
      				<button class="dialog-submit">ADD</button>
						</div>
      		</dialog>`);

    const closeBtn = this.element.querySelector(
      ".dialog-close"
    )! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    const submitBtn = this.element.querySelector(
      ".dialog-submit"
    )! as HTMLButtonElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }
  addChild(child: Component) {
    const body = this.element.querySelector(".dialog-body")! as HTMLElement;
    child.attachTo(body);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
}
