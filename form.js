export class Form {
  constructor(id) {
    this.id = id;

    this.element = document.getElementById(id);
  }
  getValues() {
    return Object.fromEntries(new FormData(this.element))
  }
  isValid() {
    return this.element.checkValidity()
  }
  reset() {
    this.element.reset()
  }
}