`use strict`;

class Typewriter {
  data = [
    "!",
    "\u{FA0E}",
    "@",
    "#",
    "\u{FA13}",
    "$",
    "%",
    "\u{20331}",
    "&",
    "*",
  ];

  constructor(el, range) {
    this.el = el;
    this.range = range;
  }

  getText() {
    if (!this.el.textContent.indexOf("\n")) return;
    let text = this.el.textContent;
    return text;
  }

  setText() {
    if (this.getText() == undefined) return;
    let text = this.getText();
    this.el.textContent = "";
    let range = text.length;
    let count = 0;
    let innerCount = 0;

    let writer = () => {
      if (this.el.textContent[count] != text[count]) {
        this.el.textContent =
          this.el.textContent.substr(0, count) +
          this.data[Math.round(Math.random() * (this.range - 0) + 0)];
        innerCount++;
      }

      if (innerCount >= range) {
        this.el.textContent =
          this.el.textContent.substr(0, count) + text[count];
        innerCount = 0;
        count++;
        range--;
      }
      if (count >= text.length) return;
      setTimeout(writer, 30);
    };
    setTimeout(writer, 8000);
  }

  render() {
    this.setText();
  }
}
