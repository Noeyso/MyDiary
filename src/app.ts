import { SelectSectionInput } from "./components/dialog/input/select-input";
import { Component } from "./components/component.js";
import {
  ImageData,
  InputDialog,
  TextData,
  EmojiData,
  WeatherData,
} from "./components/dialog/dialog.js";
import { EmojiSectionInput } from "./components/dialog/input/emoji-input.js";
import { ImageSectionInput } from "./components/dialog/input/image-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { WeatherSectionInput } from "./components/dialog/input/weather-input.js";
import { Composable, PageComponent } from "./components/page/page.js";
import { Day, DayComponent } from "./components/day/day.js";
import { NoteComponent } from "./components/day/item/note.js";
import { ImageComponent } from "./components/day/item/image.js";
import { EmotionComponent } from "./components/day/item/emotion.js";
import { WeatherComponent } from "./components/day/item/weather.js";
type InputComponentConstructor<
  T = (TextData | ImageData | EmojiData | WeatherData) & Component
> = {
  new (): T;
};

class App {
  private readonly page: Component & Composable;
  private readonly day: Component & Day;
  constructor(private appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.day = new DayComponent();
    //this.day.attachTo(appRoot);
    this.page.addChild(this.day);

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );
    this.bindElementToDialog<ImageSectionInput>(
      "#new-image",
      ImageSectionInput,
      (input: ImageSectionInput) => new ImageComponent(input.title, input.url)
    );
    this.bindElementToDialog<EmojiSectionInput>(
      "#new-emotion",
      EmojiSectionInput,
      (input: EmojiSectionInput) => new EmotionComponent(input.select)
    );
    this.bindElementToDialog<WeatherSectionInput>(
      "#new-weather",
      WeatherSectionInput,
      (input: WeatherSectionInput) => new WeatherComponent(input.select)
    );
  }

  //다이얼로그 열기
  private bindElementToDialog<
    T extends (TextData | ImageData | EmojiData | WeatherData) & Component
  >(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLLIElement;
    element.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();

      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const section = makeSection(input);
        this.day.addChild(section);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}
new App(document.querySelector(".main")! as HTMLElement, document.body);
