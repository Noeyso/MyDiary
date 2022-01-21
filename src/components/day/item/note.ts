import { BaseComponent } from "../../component.js";

export interface Note {
  title: string;
  body: string;
}
export class NoteComponent extends BaseComponent<HTMLElement> implements Note {
  private titleElement: HTMLHeadElement;
  private contentElement: HTMLParagraphElement;
  constructor(title: string, content: string) {
    super(`<section class="note-container">
						<div class="note__title_container">
							<h2 class="note__title"></h2>
						</div>
						<p class="note__content"></p>
					</section>`);

    this.titleElement = this.element.querySelector(
      ".note__title"
    )! as HTMLHeadElement;
    this.titleElement.textContent = title;

    this.contentElement = this.element.querySelector(
      ".note__content"
    )! as HTMLParagraphElement;
    this.contentElement.textContent = content;
  }
  get title(): string {
    return this.titleElement.textContent || "";
  }
  get body(): string {
    return this.contentElement.textContent || "";
  }
  set title(text: string) {
    this.titleElement.textContent = text;
  }
  set body(text: string) {
    this.contentElement.textContent = text;
  }
}
