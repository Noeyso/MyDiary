import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addWriting(child: Component): void;
  addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`);
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
}
export class PageComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(`<div>
						<h1>2022-1-15</h1>
						<section class="writing"></section>
						<ul class="page"></ul>
					</div>`);
  }

  addWriting(section: Component) {
    const container = this.element.querySelector(".writing")! as HTMLElement;
    section.attachTo(container);
  }
  addChild(section: Component) {
    const container = this.element.querySelector(".page")! as HTMLUListElement;
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(container, "beforeend");
  }
}
