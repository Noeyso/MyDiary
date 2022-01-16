import { BaseComponent, Component } from "./../component.js";

export interface Day {
  addWriting(child: Component): void;
  addChild(child: Component): void;
}

class DayItemComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<li class="day-item">
            <section class="day-item__body"></section>
            <div class="day-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".day-item__body"
    )! as HTMLElement;
    child.attachTo(container);
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
  }
}
