import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(`<li class="page-item">
						<h1 class="date">2022-1-15</h1>
						<div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
            <section class="page-item__body"></section>
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
						<ul class="page"></ul>
					</div>`);
  }

  addChild(section: Component) {
    const container = this.element.querySelector(".page")! as HTMLUListElement;
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(container, "beforeend");
  }
}
