import { BaseComponent, Component } from "./../component.js";

type OnCloseListener = () => void;

export interface Day {
  addWriting(child: Component): void;
  addChild(child: Component): void;
}

class DayItemComponent extends BaseComponent<HTMLElement> {
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="day-item">
            <section class="day-item__body"></section>
            <div class="day-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);

    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".day-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
export class DayComponent extends BaseComponent<HTMLElement> implements Day {
  constructor() {
    super(`<div class="day-container">
						<section class="writing"></section>
						<ul class="day"></ul>
					</div>`);
  }

  addWriting(section: Component) {
    const container = this.element.querySelector(".writing")! as HTMLElement;
    section.attachTo(container);
  }

  addChild(section: Component) {
    const container = this.element.querySelector(".day")! as HTMLUListElement;
    const item = new DayItemComponent();
    item.addChild(section);
    item.attachTo(container, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(container);
    });
  }
}
