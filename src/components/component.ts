export class BaseComponent<T extends HTMLElement> {
  protected readonly element;
  constructor(innerHtml: string) {
    const template = document.createElement("template");
    template.innerHTML = innerHtml;
    this.element = template.content.firstElementChild! as T;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin"): void {
    parent.insertAdjacentElement(position, this.element);
  }
}
