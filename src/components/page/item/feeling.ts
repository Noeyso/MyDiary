import { BaseComponent } from "../../component.js";

export class FeelingComponent extends BaseComponent<HTMLElement> {
  constructor(feeling: string) {
    super(`<section>
						<div class="emojiHolder"><img alt="emoji" class="emoji" /></div>
						<h2 class="feeling"></h2>
					</section>`);

    const emojiElement = this.element.querySelector(
      ".emoji"
    )! as HTMLImageElement;
    const textElement = this.element.querySelector(
      ".feeling"
    )! as HTMLHeadElement;

    switch (feeling) {
      case "happy":
        emojiElement.src = "src/common/image/happy.png";
        textElement.textContent = "Happy";
        break;
      case "soso":
        emojiElement.src = "src/common/image/soso.png";
        textElement.textContent = "Soso";
        break;
      case "sad":
        emojiElement.src = "src/common/image/sad.png";
        textElement.textContent = "Happy";
        break;
      case "angry":
        emojiElement.src = "src/common/image/angry.png";
        textElement.textContent = "Angry";
        break;
      case "surprised":
        emojiElement.src = "src/common/image/surprised.png";
        textElement.textContent = "Surprised";
        break;
      case "nervous":
        emojiElement.src = "src/common/image/nervous.png";
        textElement.textContent = "Nervous";
        break;
      case "tired":
        emojiElement.src = "src/common/image/tired.png";
        textElement.textContent = "Tired";
        break;
      default:
        throw new Error("feeling type does not match");
    }
  }
}
