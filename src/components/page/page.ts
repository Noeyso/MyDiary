import { BaseComponent, Component } from "./../component.js";
import { NothingComponent } from "./nothing.js";
type OnCloseListener = () => void;

export interface Composable {
  addChild(child: Component, dayString: string): void;
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
  private nothingElement: Component;
  constructor() {
    super(`<ul class="page"></ul>`);
    this.nothingElement = new NothingComponent();
  }

  noChild() {
    this.nothingElement.attachTo(this.element);
  }

  addChild(section: Component, dayString: string) {
    const nothing = this.element.querySelector(".noChild");
    if (nothing !== null) {
      this.element.removeChild(nothing);
    }
    const item = new PageItemComponent(dayString);
    item.addChild(section);
    item.attachTo(this.element, "afterbegin");
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
      if (!this.element.hasChildNodes()) {
        this.noChild();
      }
    });
  }
}
