import { BaseComponent, Component } from "./../component.js";
import { NothingComponent } from "./nothing.js";
type OnCloseListener = () => void;

export interface Composable {
  noChild(): void;
  addChild(child: Component): void;
}

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private closeListener?: OnCloseListener;
  constructor(dateString: string) {
    super(`<li class="page-item">
						<div class="page-item-index">
							<h1 class="date"></h1>
							<div class="page-item__controls">
								<button class="close">&times;</button>
							</div>
						</div>
            <section class="page-item__body"></section>
          </li>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const date = this.element.querySelector(".date")! as HTMLHeadElement;
    date.textContent = dateString;
  }
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  noChild() {
    const idx = this.element.querySelector(".page-item-index")! as HTMLElement;
    this.element.removeChild(idx);
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    const nothingElement = new NothingComponent();
    nothingElement.attachTo(container);
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
    super(`<ul class="page"></ul>`);
  }

  noChild() {
    const item = new PageItemComponent("");
    item.noChild();
    item.attachTo(this.element, "beforeend");
  }

  addChild(section: Component) {
    const date = new Date();
    const item = new PageItemComponent(date.toLocaleString());
    item.addChild(section);
    item.attachTo(this.element, "beforeend");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
      if (!this.element.hasChildNodes()) {
        console.log("들어옴");
        this.noChild();
      }
    });
  }
}
