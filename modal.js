export class Modal {
  constructor(id) {
    this.id = id

    this.element = document.getElementById(id);
    this.bindEvents();
  }
  open() {
    this.element.classList.add('modal-showed');
  }

  close() {
    this.element.classList.remove('modal-showed');
  }

  isOpen() {
  return this.element.classList.contains('modal-showed');
  }

  bindEvents() {
    const closeBtn = this.element.querySelector('.modal__close-btn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.close();
    });
  }
  }
}