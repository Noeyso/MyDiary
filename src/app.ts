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
  private day: Component & Day;
  private readonly day1: Component & Day;
  private readonly today: string;
  constructor(private appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
    this.day = new DayComponent();
    this.day1 = new DayComponent();

    this.today = this.makeDayString(new Date());
    this.page.addChild(this.day1, this.makeDayString(new Date(2022, 0, 13)));
    this.bindNoteElementToDialog("#new-note");
    //this.bindNoteElementToDialog("#edit-button");
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

    //데모 아이템
    this.day1.addWriting(new NoteComponent("Note Title", "this is your note"));
    this.day1.addChild(
      new ImageComponent("Image Title", "https://picsum.photos/200/300")
    );
    this.day1.addChild(new EmotionComponent("happy"));

    this.day1.addChild(new WeatherComponent("windy"));
  }

  private bindNoteElementToDialog(selector: string) {
    const element = document.querySelector(selector)! as HTMLElement;
    element.addEventListener("click", () => {
      const dates = document.getElementsByClassName("date");
      const pageItem = document.getElementsByClassName(
        "page-item"
      )[0]! as HTMLElement;
      const writings = pageItem.getElementsByClassName("note-container");

      const dialog = new InputDialog();
      const input = new TextSectionInput();

      if (dates.length > 0) {
        if (dates[0].textContent === this.today) {
          if (writings.length > 0) {
            const writing = writings[0]! as HTMLElement;
            const title = writing.querySelector(
              ".note__title"
            )! as HTMLHeadElement;
            const body = writing.querySelector(
              ".note__content"
            )! as HTMLParagraphElement;

            input.title = title.textContent || "";
            input.body = body.textContent || "";
          }
        }
      }
      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        if (dates.length === 0) {
          this.day = new DayComponent();
          this.page.addChild(this.day, this.today);
        } else {
          if (dates[0].textContent !== this.today) {
            this.day = new DayComponent();
            this.page.addChild(this.day, this.today);
          }
        }
        if (input.title == "" || input.body == "") {
          alert("제목과 내용을 모두 적어주세요.");
        } else {
          this.day.addWriting(new NoteComponent(input.title, input.body));
          dialog.removeFrom(this.dialogRoot);
        }
      });
    });
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
        const dates = document.getElementsByClassName("date");
        if (dates.length === 0) {
          this.day = new DayComponent();
          this.page.addChild(this.day, this.today);
        } else {
          if (dates[0].textContent !== this.today) {
            this.day = new DayComponent();
            this.page.addChild(this.day, this.today);
          }
        }
        const section = makeSection(input);
        this.day.addChild(section);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
  private makeDayString(day: Date): string {
    const year = day.getFullYear();
    const month = day.getMonth() + 1;
    const date = day.getDate();

    const dayString = `${year}-${month >= 10 ? month : "0" + month}-${
      date >= 10 ? date : "0" + date
    }`;
    return dayString;
  }
}
new App(document.querySelector(".main")! as HTMLElement, document.body);
