import { Component } from "./components/component.js";
import { FeelingComponent } from "./components/page/item/feeling.js";
import { ImageComponent } from "./components/page/item/image.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const img = new ImageComponent(
      "image title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(img);
    // const emoji = new FeelingComponent("happy");
    // this.page.addChild(emoji);
  }
}
new App(document.querySelector(".main")! as HTMLElement);
