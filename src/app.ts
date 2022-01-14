class App {
  constructor() {
    const main = document.querySelector(".main")! as HTMLElement;
    const template = document.createElement("template");
    template.innerHTML = `<ul class="page"></ul>`;
    const container = template.content.firstElementChild! as HTMLElement;
    const li = document.createElement("template");
    li.innerHTML = `<li>hi</li>`;
    console.log(template.content);
    console.log(li);
    container.appendChild(li.content.firstElementChild! as HTMLElement);
    main.appendChild(container);
  }
}
new App();
