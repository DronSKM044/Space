`use strict`;

class Typewriter {
  data = ["!", "@", "#", "$", "%", "^", "&", "*"];

  constructor(el, range) {
    this.el = el;
    this.range = range;
  }

  getText() {
    if (!this.el.textContent.indexOf("\n")) return;
    let array = this.el.textContent.split("");
    return array;
  }

  setText() {
    this.el.textContent =
      this.data[Math.round(Math.random() * (this.range - 0) + 0)];
  }

  render() {
    let array = this.getText();
    this.setText();
    console.log(array);
  }
}
