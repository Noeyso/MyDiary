import { ImageData } from "../dialog.js";
import { BaseComponent } from "./../../component.js";
export class ImageSectionInput
  extends BaseComponent<HTMLElement>
  implements ImageData
{
  constructor() {
    super(`<div class="dialog-form">
            <div class="form-container">
                <label for="title" class="dialog-label">Title</label>
                <input type="text" id="title" />
            </div>
            <div class="form-container">
                <label for="url" class="dialog-label">URL</label>
                 <input type="text" id="url" />
            </div>
        </div>`);
  }
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
