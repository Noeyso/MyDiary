import { Component } from "./components/component.js";
import { FeelingComponent } from "./components/page/item/feeling.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { WeatherComponent } from "./components/page/item/weather.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const note = new NoteComponent("오늘 하루", "너무 피곤하다ㅠ");
    this.page.addWriting(note);
    const img = new ImageComponent(
      "image title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(img);
    const emoji = new FeelingComponent("happy");
    this.page.addChild(emoji);
    const weather = new WeatherComponent("snow");
    this.page.addChild(weather);
  }
}
new App(document.querySelector(".main")! as HTMLElement);
