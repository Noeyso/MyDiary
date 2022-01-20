import { BaseComponent } from "../component.js";

export class NothingComponent extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div class="noChild">일기가 없어요,, 추가해주세요 :)</div>`);
  }
}
