import { BaseComponent } from "../../component.js";

export class EmotionComponent extends BaseComponent<HTMLElement> {
  constructor(feeling: string) {
    console.log(feeling);
    super(`<section>
						<div class="emojiHolder"><img alt="emoji" class="emoji" /></div>
						<h4 class="feeling"></h4>
					</section>`);

    const emojiElement = this.element.querySelector(
      ".emoji"
    )! as HTMLImageElement;
    const textElement = this.element.querySelector(
      ".feeling"
    )! as HTMLHeadElement;

    switch (feeling) {
      case "happy":
        emojiElement.src = "src/common/image/emoji/happy.png";
        textElement.textContent = "Happy";
        break;
      case "soso":
        emojiElement.src = "src/common/image/emoji/soso.png";
        textElement.textContent = "Soso";
        break;
      case "sad":
        emojiElement.src = "src/common/image/emoji/sad.png";
        textElement.textContent = "Happy";
        break;
      case "angry":
        emojiElement.src = "src/common/image/emoji/angry.png";
        textElement.textContent = "Angry";
        break;
      case "surprised":
        emojiElement.src = "src/common/image/emoji/surprised.png";
        textElement.textContent = "Surprised";
        break;
      case "nervous":
        emojiElement.src = "src/common/image/emoji/nervous.png";
        textElement.textContent = "Nervous";
        break;
      case "tired":
        emojiElement.src = "src/common/image/emoji/tired.png";
        textElement.textContent = "Tired";
        break;
      default:
        throw new Error("feeling type does not match");
    }
  }
}
