const modal = {
  isHidden: true,
  selectedImage: '',
  init() {
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },
  cacheDom() {
    this.modalContainer = document.querySelector('.modal-container');
    this.closeBtn = document.querySelector('.close');
    this.modalImage = document.querySelector('.modal-image');
    // this.thumbnails = document.querySelectorAll('.thumbnail');
    this.imageContainer = document.querySelector('.images');
    this.overlay = document.querySelector('.overlay');
  },
  bindEventListeners() {
    this.closeBtn.addEventListener('click', this.hideModal.bind(this));
    this.overlay.addEventListener('click', this.hideModal.bind(this));
    // this.thumbnails.forEach((thumbnail) => {
    //   thumbnail.addEventListener('click', this.showModal.bind(this));
    // });
    this.imageContainer.addEventListener('click', this.showModal.bind(this));
  },

  hideModal() {
    this.isHidden = true;
    this.selectedImage = '';
    this.render();
  },

  showModal(evt) {
    if (evt.target.tagName === 'IMG') {
      this.isHidden = false;
      this.selectedImage = evt.target.src;
      this.render();
    }
  },

  render() {
    if (this.isHidden) {
      this.modalContainer.classList.add('hidden');
      this.overlay.classList.add('hidden');
    } else {
      this.modalContainer.classList.remove('hidden');
      this.modalImage.src = this.selectedImage;
      this.overlay.classList.remove('hidden');
    }
  },
};
modal.init();

window.modal = modal;
